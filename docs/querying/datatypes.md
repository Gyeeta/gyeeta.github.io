---
id: datatypes
title: Query Data Types & Filters
description: Query Data Types & Filters
---

# Gyeeta Query Data Types and Filters

## Data Types supported

Gyeeta queries and responses are in JSON format. The following JSON field types are supported :

- *String*
- *Numeric*
- *Boolean*
- *Object*
- *Array*

### String Data Type

String Data Types include all UTF8 strings and single characters. Examples : "This is a string".
Fields which are JSON Arrays and Objects are internally stored as Strings as well.

### Numeric Data Types

Numeric Data Types include both integral and floating point numbers. Examples include : 10, 3.1, 3.14159

### Boolean Data Type

Boolean Data Types can have only 2 possible values : true or false. Boolean values must not be enclosed within quotes.

:::tip

Time fields are a special type in Gyeeta. Time fields are specified as *Strings* but support some *Numeric* Operations
such as >, <, =, !=, +, -

:::

## Query Filter Types

Gyeeta Query Filters are of 2 types :

- Pre-Aggregated Filters
- Post-Aggregated Filters

All filters (except query time range) that are to be applied to the raw resultset without any aggregation are specified 
within the Pre-Aggregated Filters.

All filters that are to be applied after aggregation are specified within the Post-Aggregated Filters. Post-Aggregated
filters must not be specified if Aggregation is disabled within a query.

Both these filters are to be specified as JSON Strings. A sample REST API query in JSON format showing both the filters specified is show below :

```json
{
  "starttime": "2022-07-01T19:37:04+05:30",
  "endtime": "2022-07-01T20:07:04+05:30",
  "timeoutsec": 500,
  "options": {
    "maxrecs": 10000,
    "aggregate": true,
    "aggrsec": 18000,
    "aggroper": "sum",
    "filter": "{ cluster ~ prod.* }",
    "aggrfilter": "( { svcissue > 0 }  or  { sererr > 0 } )"
  }
}
```

"filter" field refers to the Pre-Aggregation filter and "aggrfilter" field refers to Post-Aggregation filter.

The query time range (*starttime* & *endtime*) is specified outside of the Pre-Aggregation filters for faster dataset filtering.

## Query Filter Format

The Query filters mentioned above have a certain structure that is required by Gyeeta.

### Query Criteria

Each filter clause is termed as a Criterion. For example, above specified *aggrfilter* has 2 criteria : "svcissue > 0" and "sererr > 0".

Each criterion needs to be enclosed in braces as in { svcissue > 0 }. Multiple criteria can be specified along with a mix of *and* or *or* 
conditions.

When a mix of *and* and *or* conditions is to be specified, the criteria need to be enclosed by parenthesis. For example :

`( { name ~ \'^[mnp]+\' } and ( { nqry5s > 0 } or { cpudelus > 0 } ) )`

The filter above will be expanded by Gyeeta internally as :

`( { name ~ \'^[mnp]+\' } and { nqry5s > 0 } ) or ( { name ~ \'^[mnp]+\' } and { cpudelus > 0 } )`

Even more advanced filters are possible with multiple *and* and *or* criteria. For example,

`( ( { host substr 'prod' } or { cluster ~ 'cl[5-9].*' } ) and { svcid = '8e4343f0702963a4' } and ( { p95resp5s < resp5s } or { kbin15s + kbout15s > 1 } ) )`

### Filter Comparison Operators

The following Comparison Operators are supported :

| Operator | Description | Notes |
| :------: | :---------: | :---: |
| =, != | Equal, Not Equal | Valid for all Field Data types. For String fields Case Sensitive. e.g. `{ numfield = 3 } or { strfield = 'test string' }` |
| <, >, <=, >= | Less Than, Greater Than | Valid for Numeric Data Types (as well as Time fields). e.g. `{ numfield > 3 }` |
| ~, like, ~=, =~ | Regex Like Operator | Case Insensitive Regular Expression *like* Operator valid for String fields. e.g. `{ strfield ~ 'myreg.[123]' }` |
| !~, notlike | Regex Not Like Operator | Case Insensitive Regular Expression *not like* Operator valid for String fields. e.g.  `{ strfield !~ 'myreg.[123]' }` |
| substr | Substring Operator | Case sensitive Substring Operator valid for String fields. e.g. `{ strfield substr 'mysubstring' }` |
| notsubstr | Not Substring Operator | Case sensitive Not Substring Operator valid for String fields. e.g. `{ strfield notsubstr 'mysubstring' }` |
| in | List In Operator | Comma separated List Equality Operator for Strings and Numeric Types. Case sensitive for String fields. e.g. `{ strfield in 'str 1','str 2','str 3' }` |
| notin | List Not In Operator | Comma separated List Inequality Operator for Strings and Numeric Types. Case sensitive for String fields. e.g. `{ strfield notin 'str 1','str 2','str 3' }` |

:::info

As seen from above, within a Filter expression, all strings must be within single quotes as in : { strfield = 'test str' }

:::

### Filter Field Expressions

The filter field can have mathematical operators added for Numberic Field types. For example,

`{ numfield1 + numfield2 > 10 }`, or `{ numfield1 * 10 > 300 }` or `{ numfield1 % 3 > 1 }`

The filter field can also be compared to another field within the same subsystem. This is valid for all Field Types. 
No expresssions are allowed for the RHS (Right Hand Side) field though. 

For example,

`{ strfield != strfield2 }` or `{ numfield1 + numfield2 > numfield3 }`

As expressions are not allowed for RHS fields, users need to move the expression operator to LHS. For example,
instead of the following :

`{ numfield1 > numfield2 + 10 }` 

move the `+ 10` to LHS as `- 10` :

`{ numfield1 - 10 > numfield2 }` 

