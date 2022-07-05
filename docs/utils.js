
import React from 'react';


export function getsusecmd()
{
	return `sudo zypper -n dist-upgrade && sudo zypper -n install kernel-default-devel-$(uname -r | awk -F- '{print $1}')`;
}	


