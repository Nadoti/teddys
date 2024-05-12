
interface LogoProps {
  size: string;
  color: string;
}

export function Logo({size, color}: LogoProps) {

  return (
    <svg fill={color} width={size} height={size} viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="m 8.4777599,1.64085 c 0,0 2.6673691,1.587366 3.3652581,4.113034 0.629427,2.278355 0.124718,3.365257 0.124718,3.365257 0,0 0.375214,0.362478 0.747776,1.246117 0.556719,1.320947 0.124717,1.993892 0.124717,1.993892 0,0 -0.04087,-0.92875 -1.370834,-1.121399 C 10.250876,11.061024 9.8071989,12.294403 7.4810789,12.234963 6.1415571,12.200463 3.3505322,11.869832 0.99999991,8.496083 2.1405043,9.145146 3.6307492,10.14395 5.4866561,9.991635 7.3425629,9.83932 7.7299839,9.243859 7.7299839,9.243859 c 0,0 -3.5547221,-2.887084 -5.4838675,-5.982208 1.4552178,1.274244 5.0693805,3.803096 4.9849965,3.73888 C 6.1282893,6.154042 3.6169506,2.638592 3.6169506,2.638592 c 0,0 5.4217743,4.636849 5.8574903,4.611374 C 9.6538219,6.865199 10.58098,4.87449 8.4772299,1.641381 Z"/></svg>
  )
}