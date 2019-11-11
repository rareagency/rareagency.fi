import React, { useEffect } from 'react';
import Vivus from 'vivus';

export function Workspace() {
  useEffect(() => {
    new Vivus('workspace', {
      duration: 200,
      type: 'scenario',
      animTimingFunction: Vivus.EASE_OUT,
      onReady: person => {
        (person as Vivus & { el: HTMLElement }).el.style.visibility = 'visible';
      }
    });
  }, []);

  return (
    <>
      <style jsx>{`
        svg {
          visibility: hidden;
        }
      `}</style>

      <svg
        width="467"
        height="415"
        viewBox="0 0 467 415"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="workspace"
        style={{ visibility: 'hidden' }}
      >
        <path
          d="M395.095 218.734C392.143 194.207 390.275 169.44 387.426 146.257C384.8 148.592 381.256 151.741 378.154 154.491V154.533C374.89 157.423 372.129 159.862 371.507 160.391C368.585 157.107 369.95 150.885 374.376 145.017C373.582 142.033 373.1 139.029 373.494 137.114C374.163 133.876 379.964 128.221 384.416 124.946C379.036 92.7343 370.152 65.2751 351.244 48.4997C315.468 16.5886 243.753 23.0746 187.34 50.1031C130.881 77.0433 89.7597 124.557 74.4786 177.82C68.1172 199.933 66.0442 223.058 68.3714 245.949C69.7257 241.933 70.7842 238.239 71.2045 235.053C73.28 219.18 81.66 200.693 94.5541 200.693C113.607 200.693 120.851 213.903 123.051 224.784H128.079V216.046H178.291V224.784H219.215V209.041H229.743V203.095H224.373V195.618H276.183V203.095H289.342V209.041H274.237C276.32 209.047 278.315 209.875 279.79 211.346C281.264 212.816 282.098 214.81 282.109 216.892C282.103 218.978 281.272 220.977 279.797 222.452C278.322 223.927 276.323 224.758 274.237 224.763H308.961V199.338H326.898V224.763H366.193V231.571H123.84C123.84 231.806 123.84 232.035 123.84 232.256C123.068 231.953 122.268 231.724 121.453 231.571H116.716C113.523 232.149 110.662 233.903 108.699 236.486C106.735 239.069 105.811 242.295 106.109 245.526C106.406 248.757 107.904 251.759 110.307 253.94C112.709 256.121 115.842 257.323 119.087 257.308C119.544 257.307 120.002 257.283 120.457 257.235C115.46 278.888 105.539 304.24 94.8758 318.141L95.3532 318.764H115.813L111.418 335.742C143.023 362.697 189.826 372.857 242.752 383.401C302.205 395.247 369.25 407.466 394.472 380.381C419.804 353.28 403.21 286.967 395.095 218.734ZM211.349 142.173C210.748 142.174 210.153 142.056 209.598 141.827C209.043 141.597 208.538 141.261 208.113 140.836C207.688 140.412 207.351 139.907 207.121 139.352C206.891 138.797 206.772 138.203 206.772 137.602H215.92C215.921 138.202 215.803 138.797 215.574 139.352C215.344 139.907 215.008 140.411 214.583 140.836C214.158 141.26 213.654 141.597 213.099 141.827C212.544 142.056 211.949 142.174 211.349 142.173ZM305.536 114.896C299.152 114.896 292.911 113.003 287.603 109.456C282.294 105.909 278.157 100.867 275.714 94.969C273.271 89.0706 272.631 82.5803 273.877 76.3187C275.122 70.0571 278.197 64.3054 282.711 59.791C287.225 55.2766 292.977 52.2023 299.239 50.9568C305.5 49.7113 311.991 50.3505 317.889 52.7937C323.787 55.2368 328.829 59.3742 332.376 64.6825C335.923 69.9909 337.816 76.2318 337.816 82.6161C337.816 86.8553 336.982 91.0531 335.36 94.9698C333.738 98.8864 331.36 102.445 328.363 105.443C325.365 108.44 321.806 110.818 317.89 112.44C313.973 114.062 309.775 114.896 305.536 114.896Z"
          fill="#FBDBD0"
        />
        <path
          d="M94.4089 318.785C105.253 305.029 115.403 279.23 120.472 257.256C120.017 257.303 119.56 257.328 119.102 257.328C115.991 257.342 112.978 256.236 110.613 254.213C108.249 252.19 106.691 249.384 106.223 246.308C105.755 243.231 106.408 240.089 108.064 237.454C109.719 234.82 112.267 232.868 115.242 231.955"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M123.051 224.784C120.856 213.888 113.607 200.693 94.5542 200.693C81.66 200.693 73.2801 219.18 71.2046 235.053C69.4871 248.17 56.9924 269.782 56.9924 287.335C57.0125 298.618 60.5553 309.613 67.1262 318.785"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M366.193 224.784H93.3088V231.592H366.193V224.784Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M116.145 406.994V231.374"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M162.05 406.994V231.374"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M116.145 250.22H162.05"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M116.145 395.112H162.05"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M297.447 406.994V231.374"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M343.352 406.994V231.374"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M297.447 250.22H343.352"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M297.447 395.112H343.352"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M178.296 216.046H128.084V224.784H178.296V216.046Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M211.349 110.869V106.142C211.327 98.6323 208.334 91.4363 203.024 86.1261C197.714 80.8158 190.518 77.8228 183.008 77.8009H181.524C174.014 77.8228 166.818 80.8158 161.508 86.1261C156.197 91.4363 153.204 98.6323 153.182 106.142V216.046"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M226.334 137.545C226.334 137.291 226.334 137.026 226.334 136.777V126.088C226.323 122.111 224.739 118.301 221.927 115.489C219.115 112.677 215.305 111.093 211.328 111.082C207.355 111.098 203.55 112.685 200.743 115.496C197.936 118.308 196.354 122.115 196.343 126.088V136.777C196.343 137.036 196.343 137.296 196.343 137.545H226.334Z"
          fill="black"
        />
        <path
          d="M215.92 137.607C215.88 138.794 215.381 139.918 214.528 140.743C213.674 141.568 212.533 142.03 211.346 142.03C210.159 142.03 209.019 141.568 208.165 140.743C207.312 139.918 206.812 138.794 206.772 137.607"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M219.22 209.041H274.222C276.307 209.043 278.307 209.869 279.784 211.34C281.262 212.811 282.098 214.807 282.109 216.892V216.892C282.103 218.978 281.272 220.977 279.797 222.452C278.322 223.927 276.323 224.758 274.237 224.763H219.236"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M272.12 209.041V224.784"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M222.323 209.041V224.784"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M276.183 195.618H224.373V203.1H276.183V195.618Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M326.898 199.359H308.961V224.789H326.898V199.359Z"
          fill="black"
        />
        <path
          d="M326.898 205.051C328.678 205.1 330.367 205.841 331.608 207.117C332.849 208.393 333.544 210.102 333.544 211.882C333.544 213.662 332.849 215.372 331.608 216.647C330.367 217.923 328.678 218.664 326.898 218.713"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M431.251 404.576V103.325"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M431.251 179.144C422.892 179.116 414.883 175.784 408.973 169.873C403.063 163.963 399.73 155.954 399.703 147.596V135.34"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M462.757 103.325V116.867C462.73 125.226 459.397 133.234 453.487 139.145C447.576 145.055 439.568 148.388 431.209 148.415"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M371.429 160.495L415.477 121.304"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M387.229 146.21C383.477 141.997 386.767 132.953 394.566 126.01C402.364 119.067 411.73 116.862 415.477 121.07"
          stroke="black"
          strokeWidth="1.27126"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M371.476 160.381C368.554 157.096 369.919 150.875 374.345 145.006"
          stroke="black"
          strokeWidth="1.27126"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M378.133 154.533C376.877 153.277 372.487 141.852 373.463 137.104C374.438 132.356 386.482 122.393 389.076 122.393C391.67 122.393 395.578 125.138 395.578 125.138"
          stroke="black"
          strokeWidth="1.27126"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M462.747 103.236C464.543 103.236 466 101.78 466 99.9831C466 98.1863 464.543 96.7297 462.747 96.7297C460.95 96.7297 459.493 98.1863 459.493 99.9831C459.493 101.78 460.95 103.236 462.747 103.236Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M305.515 114.896C323.343 114.896 337.795 100.444 337.795 82.6161C337.795 64.7886 323.343 50.3365 305.515 50.3365C287.688 50.3365 273.236 64.7886 273.236 82.6161C273.236 100.444 287.688 114.896 305.515 114.896Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M305.515 82.6161V59.5415"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M305.515 82.6161H320.428"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M116.383 59.9722H1V64.7822H116.383V59.9722Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M52.2031 7.47705H42.168V59.9774H52.2031V7.47705Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M78.3034 9.58492L69.8739 15.1042L98.7491 59.2045L107.179 53.6852L78.3034 9.58492Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M69.9644 16.4122H63.743V59.9722H69.9644V16.4122Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.7189 64.7822H15.7051V70.7961H21.7189V64.7822Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M101.684 64.7822H95.6697V70.7961H101.684V64.7822Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M77.2962 318.785C76.3571 305.761 76.3934 272.511 91.3942 246.479"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.7318 196.656C35.5574 199.769 50.5738 233.896 59.8929 270.28"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M71.7598 231.54C66.4132 223.454 61.8506 214.876 58.134 205.923C55.6693 199.961 49.7281 174.551 29.5644 174.551C20.043 174.551 4.9176 184.452 4.9176 200.693C4.9176 209.96 11.3413 221.578 17.3707 233.693C19.2011 232.11 21.3863 230.992 23.741 230.433C26.0957 229.874 28.5505 229.891 30.8971 230.484C33.2436 231.076 35.4127 232.225 37.2204 233.834C39.0281 235.443 40.4209 237.465 41.2809 239.727C42.1408 241.989 42.4424 244.425 42.1601 246.829C41.8778 249.233 41.0199 251.533 39.6592 253.534C38.2985 255.535 36.4752 257.179 34.3439 258.326C32.2126 259.472 29.8362 260.088 27.4163 260.12C34.006 297.479 46.9002 312.776 56.4009 318.785"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
