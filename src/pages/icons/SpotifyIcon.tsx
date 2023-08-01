import React from 'react'

type Props = {
  w?: string
  h?: string

}

export default function SpotifyIcon({ w, h }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={w ? w : '50px'} height={h ? h : '50px'} fill='white'>
      <path d="M 25 1.9902344 C 12.266865 1.9902344 1.9902344 12.266865 1.9902344 25 C 1.9902344 37.733135 12.266865 48.009766 25 48.009766 C 37.733135 48.009766 48.009766 37.733135 48.009766 25 C 48.009766 12.266865 37.733135 1.9902344 25 1.9902344 z M 25 4.0097656 C 36.650865 4.0097656 45.990234 13.349135 45.990234 25 C 45.990234 36.650865 36.650865 45.990234 25 45.990234 C 13.349135 45.990234 4.0097656 36.650865 4.0097656 25 C 4.0097656 13.349135 13.349135 4.0097656 25 4.0097656 z M 21.933594 14 C 16.000841 14 11.536373 15.027452 11.318359 15.078125 L 11.316406 15.078125 L 11.316406 15.080078 C 9.7155259 15.453865 8.7059511 17.079339 9.078125 18.679688 C 9.450288 20.281477 11.075526 21.288538 12.675781 20.921875 L 12.683594 20.921875 L 12.689453 20.919922 C 12.575843 20.947632 12.739283 20.908042 12.859375 20.882812 C 12.979472 20.857582 13.156783 20.822622 13.386719 20.779297 C 13.846591 20.692637 14.514202 20.576349 15.345703 20.460938 C 17.008724 20.230114 19.325722 20 21.933594 20 L 21.996094 20 C 26.308988 20.0059 32.506391 20.667785 37.480469 23.587891 L 37.482422 23.587891 L 37.482422 23.589844 C 37.954848 23.865283 38.481566 24 38.998047 24 C 40.027098 24 41.03278 23.462606 41.587891 22.517578 C 42.4204 21.099781 41.937951 19.245598 40.519531 18.412109 C 34.27637 14.746763 27.008921 14.007143 22.003906 14 L 21.933594 14 z M 21.933594 16 L 22.003906 16 C 26.808831 16.007 33.751684 16.758455 39.505859 20.136719 C 39.99344 20.42323 40.148772 21.019657 39.863281 21.505859 C 39.672394 21.830832 39.340995 22 38.998047 22 C 38.827923 22 38.658397 21.95814 38.494141 21.863281 L 38.490234 21.861328 C 33.0131 18.647428 26.504103 18.006131 21.998047 18 L 21.933594 18 C 19.208465 18 16.806263 18.239792 15.072266 18.480469 C 14.205267 18.600807 13.504003 18.72047 13.015625 18.8125 C 12.771436 18.85852 12.58045 18.8978 12.447266 18.925781 C 12.322091 18.952081 12.331069 18.948276 12.230469 18.972656 C 11.674724 19.099993 11.153228 18.776774 11.025391 18.226562 C 10.897698 17.677484 11.221452 17.156242 11.769531 17.027344 C 11.921515 16.992022 16.232346 16 21.933594 16 z M 21.992188 22.001953 C 19.485831 22.022933 17.321981 22.257131 15.742188 22.498047 C 14.162394 22.738963 13.265055 22.956785 12.976562 23.039062 C 11.545298 23.4449 10.697078 24.961798 11.103516 26.394531 C 11.511255 27.828702 13.027844 28.672719 14.458984 28.265625 L 14.464844 28.263672 L 14.46875 28.263672 C 14.49469 28.257572 14.53521 28.248108 14.587891 28.236328 C 14.69326 28.212768 14.848723 28.180835 15.048828 28.140625 C 15.449038 28.060205 16.026057 27.951569 16.740234 27.84375 C 18.168588 27.628113 20.142467 27.410079 22.322266 27.390625 C 26.185509 27.356565 30.567753 27.924285 34.84375 30.587891 C 35.289626 30.867749 35.792755 31.001953 36.28125 31.001953 C 37.187002 31.001953 38.077741 30.54265 38.589844 29.722656 C 39.378024 28.458742 38.985326 26.765566 37.720703 25.978516 C 32.336064 22.623808 26.560664 21.964096 21.992188 22.001953 z M 22.009766 24 C 26.371289 23.96386 31.724703 24.598489 36.664062 27.675781 C 37.00944 27.890731 37.108398 28.317977 36.892578 28.664062 C 36.752681 28.88807 36.521498 29.001953 36.28125 29.001953 C 36.149745 29.001953 36.024374 28.968673 35.90625 28.894531 L 35.904297 28.892578 C 31.213033 25.969431 26.380741 25.35469 22.304688 25.390625 C 20.002485 25.411175 17.940802 25.640824 16.441406 25.867188 C 15.691708 25.980369 15.083306 26.093481 14.654297 26.179688 C 14.439792 26.222787 14.270205 26.258358 14.150391 26.285156 C 14.090481 26.298556 14.043261 26.309979 14.007812 26.318359 C 13.972362 26.326759 14.028242 26.308563 13.902344 26.345703 L 13.912109 26.341797 C 13.529249 26.450703 13.137605 26.235485 13.027344 25.847656 C 12.915932 25.454918 13.129707 25.073722 13.521484 24.962891 L 13.523438 24.962891 C 13.511947 24.966191 14.540762 24.703693 16.042969 24.474609 C 17.545141 24.245573 19.619122 24.020016 22.009766 24 z M 22.5 29.001953 C 18.141114 29.002953 14.914292 30.062424 14.708984 30.130859 C 13.409991 30.563124 12.696085 31.994504 13.128906 33.292969 C 13.561895 34.591934 14.993351 35.312698 16.294922 34.871094 L 16.279297 34.876953 C 16.379482 34.844753 16.438799 34.823793 16.742188 34.742188 C 17.045575 34.660578 17.491802 34.551256 18.048828 34.441406 C 19.16288 34.221707 20.724875 34.002431 22.5 34.001953 C 26.836932 34.000989 29.799021 35.039503 32.113281 36.582031 L 32.113281 36.580078 C 32.537053 36.863144 33.023236 37.001953 33.498047 37.001953 C 34.304696 37.001953 35.102812 36.603444 35.580078 35.886719 C 36.338631 34.748062 36.024808 33.181703 34.886719 32.421875 C 31.24152 29.992096 27.140106 28.999891 22.5 29.001953 z M 22.5 31.001953 C 26.859894 31.000053 30.494548 31.897723 33.777344 34.085938 C 34.015629 34.246398 34.075032 34.5406 33.916016 34.779297 C 33.815282 34.930571 33.661397 35.001953 33.498047 35.001953 C 33.400857 35.001953 33.310884 34.976899 33.222656 34.917969 L 33.222656 34.916016 C 30.588916 33.160587 27.163068 32.000917 22.5 32.001953 C 20.561125 32.002475 18.875557 32.239215 17.662109 32.478516 C 17.055386 32.598166 16.565205 32.718405 16.222656 32.810547 C 15.880107 32.902687 15.581784 33.000359 15.667969 32.972656 L 15.660156 32.974609 L 15.652344 32.976562 C 15.385915 33.066963 15.116402 32.933192 15.025391 32.660156 C 14.934381 32.387121 15.069741 32.117683 15.341797 32.027344 C 15.400487 32.007784 18.468886 31.002914 22.5 31.001953 z" />
    </svg>
  )
}
