import React from "react";
import { Logo } from "./Logo";
import { EmailSignupForm } from "./EmailSignupForm";
import { ProductImage } from "./ProductImage";
import { useIsMobile } from "@/hooks/use-mobile";
export const ComingSoon: React.FC = () => {
  const isMobile = useIsMobile();
  return <section aria-labelledby="coming-soon-title" className="flex flex-col md:flex-row items-center justify-center gap-[60px] bg-[#F3EFEC] p-6 md:p-16 sm:p-10">
      <div className="flex flex-col items-start gap-12 max-w-[600px] w-full">
        <div className="flex items-end gap-2">
          <svg id="74:391" width="66" height="58" viewBox="0 0 66 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[66px] h-[57px]">
            <g clipPath="url(#clip0_74_391)">
              <path d="M3.56115 42.5067C1.09124 41.7129 -0.720837 39.2826 0.281232 36.6815C1.09217 34.576 3.41919 33.4388 5.6024 33.4379L5.97818 31.7044C-0.0156776 29.6618 1.82423 22.8396 7.75221 22.7002L8.21335 21.0831C2.23155 18.9268 4.18466 11.8758 10.1553 11.753C10.4726 8.54636 11.2799 5.36835 14.8892 4.60038C26.8945 3.39582 38.911 2.07034 50.9386 1.14453C53.2424 1.35129 55.0053 3.18537 54.7947 5.53173C52.4983 17.8949 50.3114 30.2922 47.8109 42.6129C46.9378 44.8716 44.7907 46.21 42.4034 46.3715L6.32241 48.7834C3.27074 49.2532 3.98054 52.7128 6.96169 53.1087C9.82872 53.49 13.2079 53.4023 16.1445 53.573C23.0607 53.9736 30.0028 54.3779 36.9282 54.773C40.6405 54.9853 44.5541 55.4422 48.2442 55.5142C50.6491 55.5613 52.245 54.1813 53.1246 52.0537L56.9798 33.3668C57.2544 32.7742 58.0876 32.6275 58.5896 33.0382C59.0433 33.4093 58.8401 34.0693 58.8605 34.5917C57.5031 40.3921 56.7636 46.5238 55.3004 52.2799C54.3308 56.0938 51.2958 57.7488 47.5019 57.6362C39.6356 57.4036 31.543 56.62 23.6591 56.1566C18.2609 55.8391 12.8043 55.7671 7.42376 55.324C3.97961 55.0407 1.55609 53.2823 2.11465 49.5827C2.46815 47.241 3.30971 44.8669 3.5593 42.5067H3.56115ZM5.05869 46.9253C5.87055 46.582 6.68612 46.7084 7.51561 46.6475C18.5848 45.8352 29.6762 45.1909 40.7342 44.2494C43.4203 44.0205 45.0431 44.159 45.8373 41.1111L52.4575 5.79202C52.5317 3.02937 50.239 3.40228 48.2488 3.54258C39.4677 4.16286 30.6588 5.24928 21.8972 6.12616C20.1018 6.30616 18.2006 6.35046 16.4247 6.58953C12.7895 7.07966 12.9806 8.97281 12.3794 12.0678C13.477 12.304 16.9629 14.1898 15.3494 15.5808C14.0764 16.6783 13.1207 14.4344 11.831 14.5258L10.1572 22.966C11.1917 23.2937 13.5141 24.4097 13.3712 25.6964C13.2998 26.3333 12.8034 26.7487 12.1595 26.7136C11.3244 26.6684 10.6684 25.1795 9.6079 25.329L7.84036 33.724C8.98068 33.9456 12.0899 35.8766 10.8605 37.2371C9.66821 38.5561 8.60397 36.1239 7.37736 36.1249L5.05776 46.9244L5.05869 46.9253ZM9.60418 14.1575C6.55344 14.1723 5.70539 17.8478 8.7682 18.7727L9.60418 14.1575ZM7.37736 24.958C4.34889 25.0346 3.34404 28.2652 6.4087 29.4762L7.37736 24.958ZM5.15055 35.7575C2.07568 35.6218 1.08753 39.181 4.08631 40.3699L5.15055 35.7575Z" fill="#014532"></path>
              <path d="M50.304 51.2314C48.0957 53.4282 45.0116 52.6731 42.2216 52.5522C33.7745 52.1839 25.2421 52.0012 16.7959 51.4473C16.5371 51.4307 15.7837 51.355 15.5999 51.2526C15.0859 50.9664 15.2038 50.0425 15.7011 49.8976C16.0481 49.797 17.3619 49.8643 17.8193 49.8745C25.1669 50.0388 32.5757 50.6452 39.8992 50.9849C41.7642 51.0717 44.1366 51.3384 45.9339 51.2664C47.5743 51.2009 49.1108 50.2649 49.4745 48.6053L55.9694 17.6836C56.1151 16.7264 56.1151 16.3202 55.692 15.4295C55.4684 14.9578 54.9553 14.5369 55.087 13.9471C55.2893 13.0425 56.3211 13.2835 56.8787 13.6961C58.1341 14.6255 58.4514 16.0184 58.3057 17.5156L51.667 48.7558C51.4684 49.6428 50.9489 50.5917 50.3049 51.2314H50.304Z" fill="#014532"></path>
              <path d="M64.3284 19.8146C64.796 19.7971 64.9992 19.7417 65.3156 20.1626C65.7128 20.6906 65.5309 21.3727 64.8898 21.573C63.7281 21.9357 61.9197 21.7142 60.6848 22.0087C59.7384 21.9247 59.4257 20.6878 60.3582 20.2946C60.9047 20.0638 63.6038 19.8405 64.3293 19.8137L64.3284 19.8146Z" fill="#014532"></path>
              <path d="M63.3754 12.1729C63.9859 12.2006 64.3144 12.855 64.0908 13.3959C63.8171 14.0577 61.2534 14.9254 60.5668 15.338C59.6445 15.5217 59.0526 14.3688 59.8041 13.7457C60.1048 13.4965 62.3492 12.448 62.7964 12.2929C62.9597 12.2366 63.2084 12.1655 63.3754 12.1729Z" fill="#014532"></path>
              <path d="M59.4756 26.6655L62.9856 27.9255C63.8179 28.4331 63.3976 29.6331 62.4558 29.5694C62.1663 29.55 59.4116 28.5384 59.1174 28.3584C58.2508 27.8267 58.5097 26.7791 59.4756 26.6655Z" fill="#014532"></path>
              <path d="M32.3159 15.0139C36.8298 14.5034 40.2805 18.0451 38.6475 22.5126C37.0961 26.7577 31.273 29.0883 27.5189 26.1023C22.9651 22.4803 27.5282 15.5548 32.315 15.013L32.3159 15.0139Z" fill="#014532"></path>
              <path d="M39.1828 33.6606C39.8555 33.6347 40.6924 33.4326 40.9216 34.2772C41.1183 35.0036 40.5922 35.5187 39.888 35.562C32.6545 35.7956 25.4183 36.8395 18.1904 37.0527C17.6986 37.0675 17.0575 37.1663 16.7615 36.7131C16.3524 36.0872 16.6687 35.4005 17.3572 35.2076C24.637 34.927 31.9095 33.9366 39.1837 33.6606H39.1828Z" fill="#014532"></path>
              <path d="M32.3076 39.0159C32.804 39.5494 32.4365 40.5121 31.7277 40.6441L16.4229 41.7647C15.2956 41.7665 15.1731 40.0238 16.3357 39.8235L31.4586 38.7076C31.6989 38.7039 32.1461 38.8433 32.3066 39.0159H32.3076Z" fill="#014532"></path>
              <path d="M23.6777 21.0173C24.1583 21.4549 23.8744 22.4443 23.1915 22.5514C21.9677 22.7434 20.2976 22.4222 19.0236 22.5542C18.132 22.1665 18.2043 20.9536 19.2157 20.8106C19.9923 20.7017 22.3091 20.7109 23.1061 20.7995C23.2778 20.8189 23.5533 20.9029 23.6777 21.0164V21.0173Z" fill="#014532"></path>
              <path d="M24.3133 25.834C24.9591 25.8644 25.1381 26.4404 24.9646 26.9933C24.7568 27.6551 21.8629 29.0157 21.205 29.5298C20.1714 29.7874 19.6954 28.7249 20.4127 28.0031C20.652 27.7622 23.3697 26.0998 23.7334 25.954C23.8846 25.8931 24.1546 25.8275 24.3124 25.8349L24.3133 25.834Z" fill="#014532"></path>
              <path d="M43.8174 13.5309C44.7165 13.3537 45.3493 14.3865 44.6794 15.0373C43.6764 15.5099 42.1659 16.7024 41.1508 16.9794C40.5134 17.1529 39.8323 16.4172 40.107 15.7508C40.3492 15.1628 43.1735 13.9961 43.8165 13.5309H43.8174Z" fill="#014532"></path>
              <path d="M45.8504 21.8787C45.7084 22.0273 45.4013 22.1649 45.1888 22.1898C44.5384 22.2682 42.2884 22.2802 41.6658 22.1824C40.7519 22.0375 40.5561 20.5985 41.573 20.4388C42.1724 20.3446 44.7667 20.3446 45.367 20.4388C46.0276 20.5422 46.3134 21.3941 45.8504 21.8787Z" fill="#014532"></path>
              <path d="M22.5707 13.8057C22.7962 13.7872 23.1878 14.0291 23.3984 14.1417C23.9013 14.4121 25.6957 15.4505 26.0195 15.7801C26.72 16.4908 25.9434 17.5615 24.9544 17.208C24.6649 17.1046 22.1374 15.5244 21.9389 15.3158C21.3757 14.726 21.8136 13.8685 22.5707 13.8057Z" fill="#014532"></path>
              <path d="M37.7875 9.101C38.4769 8.99024 39.0781 9.46376 38.8805 10.1911C38.7905 10.5197 37.5657 12.9122 37.3468 13.1882C36.6676 14.042 35.4475 13.4956 35.7203 12.4932C35.8353 12.0713 36.8179 10.1588 37.0851 9.69728C37.2651 9.3853 37.4024 9.16377 37.7884 9.101H37.7875Z" fill="#014532"></path>
              <path d="M38.7123 25.8997C38.8868 25.8609 39.0538 25.8646 39.2273 25.9006C39.5056 25.9578 41.9366 27.5242 42.1741 27.7688C42.9006 28.5174 42.1453 29.6029 41.1748 29.2235L38.3625 27.3147C37.9849 26.9252 38.1334 26.028 38.7114 25.8997H38.7123Z" fill="#014532"></path>
              <path d="M29.4331 9.47046C29.975 9.34677 30.3953 9.47784 30.6207 10.004C30.7877 10.3953 31.4233 12.7399 31.4178 13.0989C31.4038 13.9324 30.0455 14.3072 29.6419 13.2854C29.473 12.8571 28.8551 10.6953 28.843 10.3141C28.8309 9.9329 29.0555 9.55722 29.4331 9.47046Z" fill="#014532"></path>
            </g>
            <defs>
              <clipPath id="clip0_74_391">
                <rect width="66" height="57" fill="white" transform="translate(0 0.889648)"></rect>
              </clipPath>
            </defs>
          </svg>
          <svg id="75:349" width="161" height="50" viewBox="0 0 161 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[161px] h-[49px]">
            <g clipPath="url(#clip0_75_349)">
              <path d="M11.1364 16.6922C11.5557 18.6881 8.35941 20.6367 6.686 20.8278C2.02789 21.3575 -0.703311 17.2882 0.158172 13.0221C2.91225 -0.608441 29.0884 -2.11244 38.1263 5.31863C45.4356 11.327 43.5315 22.7688 37.7527 29.1518C29.4181 38.3592 17.7652 35.6293 6.59261 35.8602C5.83595 35.3626 5.79021 34.6513 6.60404 34.1764C8.0049 33.3592 10.4636 34.2313 11.2602 32.366C13.2329 24.0022 16.0136 15.7615 17.931 7.39395C18.5924 4.51082 17.952 4.36137 15.0626 4.54677C10.1167 4.86459 3.65366 9.21199 5.14791 14.7815C5.48716 16.0471 6.61357 17.2257 8.01634 17.2314C9.18277 17.2371 10.0957 16.136 11.1344 16.6904L11.1364 16.6922ZM25.2936 4.39164L18.074 31.3746C17.4984 33.5483 20.4392 33.5729 21.9297 33.4992C31.8539 32.9997 37.5774 20.4134 35.4656 11.7451C34.3468 7.15748 30.0642 3.95273 25.2936 4.39353V4.39164Z" fill="#014532"></path>
              <path d="M71.7051 42.3261C67.1461 46.9119 57.9309 52.9809 51.668 48.064C47.6903 44.9406 50.2442 38.7449 54.8223 39.8271C57.218 40.3927 55.0072 42.7594 55.8458 44.4866C56.7835 46.4181 59.3222 46.2838 61.1042 45.9017C65.5851 44.9387 68.9129 41.0454 71.8613 37.852C72.212 37.0839 71.5011 33.9359 71.3296 32.9011C70.6778 28.9661 69.3627 19.4881 66.8964 16.6806C65.9777 15.6345 63.8774 15.2599 64.7065 13.7218L69.3951 13.6481C70.7292 13.5119 72.8867 13.2167 73.6472 14.5183C74.5487 16.0601 75.3054 22.9615 75.555 25.1106C75.8219 27.411 76.022 29.6737 76.0601 31.9911C76.5023 31.9817 77.3714 30.4039 77.642 29.9669C79.1916 27.4659 81.9895 22.0988 81.6807 19.2195C81.473 17.2785 78.8618 16.8604 79.4794 14.9534C80.2208 12.6681 86.2283 11.7033 86.0739 16.5804C85.8242 24.4447 77.1922 36.8115 71.7051 42.3299V42.3261Z" fill="#014532"></path>
              <path d="M106.803 31.2702C108.084 32.0193 105.572 34.2233 104.92 34.7133C102.516 36.5219 97.7954 37.2616 97.0159 33.512C96.4784 30.9202 99.4612 23.8883 100.157 20.9049C100.401 19.8587 101.043 17.8477 99.9663 17.1421C97.8202 15.7383 93.7015 20.9333 92.9677 22.6605C92.2873 24.2648 90.5471 30.627 90.448 32.2747C90.3261 34.2649 92.8991 34.7019 91.1113 35.7632C88.1781 35.7651 85.2201 36.0451 82.3326 35.5968C81.311 34.1174 84.0365 33.669 84.309 32.2274C85.3173 28.0919 87.2118 23.7086 87.9189 19.5428C88.0561 18.7388 88.3 17.3558 88.1209 16.6067C87.8617 15.5321 86.2569 15.8556 86.9106 14.3781C88.3687 14.2343 93.082 12.9233 94.1513 13.6498C95.4225 14.5162 93.6996 17.2102 93.7834 18.3642C96.3602 15.7156 99.1734 12.5922 103.292 13.0898C106.871 13.5211 106.917 16.8015 106.258 19.5844C105.547 22.5886 104.226 25.7063 103.464 28.7295C103.256 29.5562 102.257 32.655 103.868 32.5547C104.824 32.4961 105.886 30.7348 106.799 31.2702H106.803Z" fill="#014532"></path>
              <path d="M64.1098 14.0531C64.4491 14.5847 63.9993 16.2173 63.8659 16.8568C63.0845 20.5515 61.5616 24.2594 60.7325 27.9353C60.4867 29.0212 59.8082 31.4011 60.521 32.277C61.9943 34.0893 63.7039 29.2879 65.2439 30.3303C66.2102 31.3216 63.6829 33.8056 62.9148 34.4507C61.2929 35.8109 59.7434 36.3955 57.5725 36.1495C55.0452 35.8639 54.706 33.7469 54.9518 31.6527C55.0967 30.4173 54.159 32.1389 53.9531 32.3678C51.5402 35.0561 47.9551 37.4511 44.2557 35.7466C39.9312 33.7564 41.7609 26.5769 43.4019 23.2171C46.2074 17.4678 54.5859 9.36516 61.0318 14.946C61.4587 15.0217 62.1143 13.5328 63.2465 13.6747C63.3532 13.688 64.0832 14.0115 64.1098 14.0531ZM55.3292 15.9506C52.2511 16.5881 48.0161 24.7929 47.7607 27.7347C47.5587 30.0617 48.2296 33.4631 51.2467 31.7624C54.9023 29.7022 57.2618 24.0097 57.9632 20.0804C58.3825 17.7365 58.6455 15.2657 55.3292 15.9525V15.9506Z" fill="#014532"></path>
              <path d="M119.569 13.122C132.876 11.5253 130.711 31.3516 119.609 35.4852C115.471 37.0252 109.898 36.3101 108.084 31.7943C105.051 24.2459 111.575 14.0812 119.569 13.122ZM119.757 15.5644C116.805 15.9635 114.47 22.0817 113.756 24.5675C113.041 27.0534 111.387 34.1307 115.827 33.9585C120.268 33.7864 122.66 25.2581 123.04 21.6731C123.282 19.3726 123.198 15.1009 119.757 15.5644Z" fill="#014532"></path>
              <path d="M153.876 13.1223C161.566 12.1953 163.682 20.5269 156.976 23.9567C154.285 25.334 150.944 25.8069 148.001 26.3991C146.683 32.5286 151.644 34.7287 156.206 30.7597C156.811 30.2338 157.592 28.883 158.353 28.9927C160.262 29.2708 157.466 32.3507 156.881 32.941C153.027 36.8324 145.141 38.0092 142.446 32.3072C139.084 25.1921 146.252 14.0398 153.876 13.1223ZM153.485 15.7614C151.053 16.2627 148.714 21.6014 148.274 23.8356L148.484 24.2235C150.906 23.3438 154.417 22.4925 155.669 20.0066C156.692 17.9767 156.388 15.1617 153.485 15.7595V15.7614Z" fill="#014532"></path>
              <path d="M139.814 13.4473H144.292C144.805 13.4473 145.091 15.4735 144.388 15.8121C143.507 16.2378 139.324 15.5454 138.946 16.0864L135.091 31.1888C135.71 34.4238 138.851 30.2107 139.791 29.997C141.047 29.7132 141.03 31.0318 140.383 31.8907C138.607 34.2479 134.284 37.0591 131.233 36.0546C128.641 35.2013 129.403 31.6958 129.805 29.7132C130.718 25.2012 132.281 20.6797 133.337 16.1905C133.358 15.7932 133.335 15.9464 133.053 15.9048C131.795 15.7194 129.6 16.5253 130.322 14.1454C130.505 13.5438 132.819 13.3092 133.575 13.0254C134.974 12.5014 136.185 11.4382 137.139 10.3201C137.803 9.54261 138.498 8.03105 139.04 7.47674C139.594 6.91109 141.098 7.00946 141.121 8.04807C141.155 9.52369 139.794 11.8468 139.812 13.4454L139.814 13.4473Z" fill="#014532"></path>
            </g>
            <defs>
              <clipPath id="clip0_75_349">
                <rect width="161" height="49" fill="white" transform="translate(0 0.889648)"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        
        <div className="flex flex-col items-start gap-4 w-full">
          <h1 className="text-[#014532] text-6xl md:text-5xl sm:text-4xl font-black leading-[140%] font-['Nunito_Sans']">
            The journal you will actually use.
          </h1>
          
          <p className="text-[#014532] text-2xl md:text-xl sm:text-lg font-medium leading-[160%] font-['Nunito_Sans']">One audio note per day, automagically transcribed—zippity zap.</p>
        </div>
        
        <EmailSignupForm />
      </div>
      
      <div className="flex-shrink-0 w-full md:max-w-[500px] h-[90vh] flex items-center">
        <img alt="Phone mockup" className="w-full h-auto max-h-[90vh] object-contain" src="/lovable-uploads/46bcffe0-c273-438a-be64-f6f5a81318f2.png" />
      </div>
    </section>;
};