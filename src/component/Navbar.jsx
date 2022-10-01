import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({
  authenticate,
  setAuthenticate,
  userStatus,
  setUserStatus,
}) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  let [width, setWidth] = useState(0);
  const navigate = useNavigate();
  const goToLogin = () => {
    if (authenticate === true) {
      setAuthenticate(false);
      setUserStatus("로그인");
    } else {
      navigate("/login");
    }
    console.log(authenticate);
  };

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어오기
      let keyword = event.target.value;
      console.log(keyword);
      // url을 바꾸기
      navigate(`/?q=${keyword}`);
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div className="login-status">{userStatus}</div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAAC2CAMAAADAz+kkAAAAmVBMVEX////MBx7JAADMABvLABjLABXMABzLABLLAADKAAnLAA/LAA3KAAf//P3++Pn+9/j66uzuvMD55ef11Nfkk5niiZD88fLqqa7ttrrrrrPwwsbdc3vmmqDhgon33uD22dzTOkfXU13WSVXUQU3yy87PGCvooqfRLjzbaHHfeYHYW2TjjJLmmZ/cbHXQJDTWUFrQJzbQGC7ZYWqGG9TtAAAXEklEQVR4nM1de1/iPBOlKZQiV0FRVMAb4mXV1e//4V5KSzNJczKToPu889f+3LakaTJz5swlrdZ/KfOr5W3ydT78TwdBZHr6dHbz+J8OYXj52lb9dpKp6/90HAe5uv6bq3yg1N0PPXD1Z3k+C7vl8TpX3SwpJM3mPzCG9Z/rh+3rU+S6my17xRfai1r8wHBa8+887w/UjfyO6duH6pdTUshgeuwQ1suvPD/ptLvqIeLu4eI27+nhdJ+PHc5OZmmvnGLhu61uHtSgnWjJOpPjRnB5r3pp9TB1GXr36jxRdDhJ+/a44RSyzqtH5k/8xZPF8iPPO4kh7b/HqNvxxUaRB568h9w8P335ygepNZ6Y9WY9NznMc2/JXnyW15uXSPc1/udnS+tDhzxscj1Q/bQxns4R46nku3d4mDrjrn1XWWMIxSKL1W6z3drvWW8VMCsLqtuI9N8ix1PLo6ofpk6Za5+Uawy7G6NM0ORt25iSoFk5c3+j3Ve6iBkPlbuu+OXGuXsU3Rh8MH9XqrkXi6d9C5+wAN9o9yLriAFRWelHd+6Za59yMIhgq7FDXGnP/bDkRGhWV+Ab7eBTcix8WurBsS+3dX7b3SDGwT97qppb5zArQqB820FPYD8vJ+OkHl26YV7uCqzY/kvwz65yOClJ71z0iBu4f6RPwEL2JmuXP8HHidjFdyfwlZJcBLHnDoNcD+gqeECmkGXIIds10CqdcMg0A48qZ0Vk5pcD/AQVvqMNWQfo2iVQjxJELHxU+U4cPihkcoJUbYG0gwdkynVfD4bRtcgsZ71ghT8c4FcSrv8Xz1KJ0HOGzFOia0f+a5FZlhpSIqdYURazImA05r4tGAMUqFzo4Q04vf3hNsuJCme+CHB0PVDgf597lkqSr4JHZAh5U07XIrPc3ga7y9OebwMlin/CvI0NUJJ+hA7IlJl+Uxa03wOznLMeZUNufMt/p6f4J7z5nnCMA1/Is0YNnOJfIVUgWe+WfIG9WIrAgowg1i8kwiZSmWs3PE2Za1/67iFEgOu1V9cmHd7V/ONdbBGKDjx8wBASky74OiJwYYoXrOzsKkt9ES/FJflxYZiNfnjO6FqkClh73pQhMmaHD8QqKr9eioDaVIhVYRVUCr5OhB+GjFn9gTjGaOgzQCKa1Sffcl0LYZc0KkDk2eMY7h/JQVsEJ4Xv4peJfnjaZa5FsCtitfrtR/FWDAYb+k3YkRjuTM8KhzmwWQ7H1pf+L51kXWb5Xfh3YLoJHhIVMuWcrkVWI4aEe/WifQH3xSjrKA65lgBdO0YIPcI5nTBLhQ37YQq7lOMwHPlmnH67QG8SQcLBZx2k8+l/AOCO9ZiOwXATPeVpxlx7CwbSuQ3/XUxBV8Jw2X4SYif5MfT+m3bFOV37iAYSEYuackuFY20fmFk9Ku4+1Lg247IsvoF+zDrhn8UPSwvxmzUOAib9Y/KLTuW6FrIhMQNAm5HMilcvcEslPuJdyJ1c155BXRuYG9XyAB/yVB8zMWPvjxhULVP99PYXc20GvI6YHXzmIxZLyX33+6nNnWTe2xk5l+taqPRjgAFnVhl6EUWktByjbEdU1zJcGmImswgT6A2OleLNx+Fw8c5hPiJx5VKua+HnOZHmUxB54zeQDy5LtNIRQQ+iyTkoiJjJKAy58RIje/Ft6Gs0FnJ7fNYi1bUMdTxCS6W9Df9d3oJ42ZEpx0EUrxNMDdZCde0f/6XQbeFudAlD2JbPxa7VC3/7EUEPqmu5FQdRV0TAY/iXtUA+dmWulwrciLIkD6cE4Fq45mNYDMkG8nBGGk22t2hajnCYA3Qt5Fhj8mYkGwjjjXH3MBXZZgmHFa1WVlpVcDFiGPlvf0TEXLq8BfLkT2oOu798AbPC4nQsAboWsulcUM0lkg2Eg0HEyVdTpO3iE1fI49n8WgjQIwIerSWPNjwuryYm+9djaBijk48DdC2kmzgW0SUSC+RRdPrufAXHFZ98TPwaTmUiuikqEEU3kCf7ERh8/S13nsYfMCvpJpadJBQhpzInCEtGBJcNC4Qta9YFT9Z2c7ce7oDDGh9hDuAQIN0UFcklweHsHKkYZJj1nil2PYoz89kMSAiHxMFTGI7iYp4uIbqg8/0HIRdUGfdZ7+Wd4llBZRvrMAdwCJA4jsqSJxsov4RrBaxCTSEUmwQOLOZr7eVTrmshGxhDGNOkFTV6R9gUPFpfXwz6HKy0rB8+rr1QXPvl17XQb087EfngxALtlhrk1NyGWQ9lr3fQ3YLUMbcQXctV00FdGwUgCYRTC8h6giwLnbJfUG1DxF2xGcNIToiuZeApBBVRsQVCXpxMWg9Aj2dd1/od1XV0adIyYsHWwCLTeQJwLda1MaDgMTd+GHkSbSfBr+ONqkD0l2hksZXmNA+BmViIa6N8DVqwtmiN0R5wfiqd21SmtiBKPI10mAmu5TKCpqj6M8tjam/IdlSj1iQDD3d6zNovLGEnCqrGpvMQBcppJpjnG1aYXsmjuXOnCMQ516HebvsPApVtDJNcSCrXtSiTNI4DtCo+cZqd4+FawQ32EA8i28iyOqJAOdMOffW4iKWmAbJ07nm6ywepwWSVUYKTXOMcZqJAuRAb5GujSHQSSN1vfmRF0qyps3TSf1WdhZBtZFkdydPLTphLka5N8sl8sj59Ont53W422xfZoqXYsfgciPh0LUT9fSpKCdEIUQrPSDPiqABP9vM2zZXKB/1uO03bffUgYVpIDut+maN8DQeVPalTiroV/4fKLCKVLc2vZZxLTzy4bQ4qFxQdksqX0noiBtfBj5zX91bKdIrUSh4VCno0/DPppZykKa/jyNIoTS9CiE3DPKwrmA5xbaRsIyplC3k3/DP/pUz9gfEmfGRVxymy3sT8gylNw6yz0w/24Q0p26hiQxKl9ZUVjdaL83sJGV9J+sVCXQIwKh8K5ZQ1WaOtBvvVmFFXAmnLCVOIAgW5j9Ors+fbXOU9Lk3RGAyvV4iWr5LGIOKwb9UI64AIRh8I2UaFgoibmttUwHh6+Xbf3tmWk4BVUr0IH4Ghv7zfQHMIV+xbax4m61VLEmYxR4WCCJAyUcH68uUzUWrQEQSBHWPh1+20oeUR4G8YAX1h78B0QWV7EqNsSfLUYa2Ndiuk2DH9uAnZSaoEoYanxgZCJq5hmPWg61IdRCNEMexDS9eOHm9eP3IVpEIacpJIoC1RjxVMQt/b9iZ0YbGGd4hij0pUJ0U1ndfLl787eNoN1iH2S3xKmJYJzQsp/yTtDqWJD22yUTOOqER1ytR0ckcbvIhJkfkdJLHugMlRdo9tmGsDrjMTIbKNIZP5nOZgEU6KEeyv3ho55FY+9KKB4HwBsvBJwUmz0dIT0oEkgl/bPuD12oCwXt8kSwD5lcF5rtPL960gIS1MOtK81gVx1A+kKAD8VkfNmUXX7gUFyILi7tOL67bKw7EZJ6k4BZpGFaqtjxh+i+DXNeiaPx+hzCCxsp2fXm/z/CQWi3hFnC0/1vRVHQVGfarMmKQmVojRhQWuorj7/Gq5Va6Oqz8juTimSrjI+qVR7M+srNFmmZBBSNnySU7D2c19pnq/NSNJUFopbXtzwBwI2ppxuzqC1CU5eKhqkUG208VzqvJoCC+STI4NRq52jojLNtgVfRH9M6KrPAkB48e3rfolRWKMXk7zk/CyJpshtKUaXJtlanNRRgBKchovvn932+jBByRq0PyMen8gzEGB2MwMuFeCKAhAIzze7fyaX18k5QBCslfIt9X8H+A/DXalplPThAAjXG7u+O3ht2Lr8X5IOiqkBJM2XtNBDZDSQ2mfsY6i0ng42ntOZfv8816OW1J1G8R4nRv5GQf5ci9qGuUiZpkqG8SyO9so/QttkhTrZBPIjWpuMuvqtwNxSfJqOrndpIVRjoYTVKJ8qh+UtJOr+9BsVkru6zWOShOIt3PqNMutMWre6gz6wZSon5I0Tz6fwivqSA4MYeBRpgVxZe6dZhl230u/nK4q29PkOEk366jewsQ3JlgElQnpZaGpJTOctwhDttP8V/dQZMYm8XdohiHyZfQ2qLk6q4oChadRCddjW/3icvEU0/qEcJM0txd98d6BxtcltFbqBAzEwsTHi/v8x6mlSmIbMhDKjc4riF3ogwUIM2noslEHtcL0qLzp0tPi/hiJLFub60QTI2ETlPWnH4fdUmtJi4ZC5DPTbvWRr5hHkuHWjjG9MwohltHYCcDvrc3NzG2WcRiJy6c+jQK5WaeneltY3hXRLNx+e+P1QFJBrZBr5t3euSghjq2XRQfZwAlp93OVf55fTWG6mSthc7yerTg2e0jr98nFQ5Ctfvji4zpgqKydi5hsPqP0Rb5asm6uurfXl6UihLH+fUGB8bqL20Ge54P7hZeRIwbYyONDHXsP7Gydx5MNzInHpR48Z3vH930p8HtPqfz1z6NW3rBjmZ1YONuqvS3IOuqvj5N7cVErLVxOf9gH9VKyfxjmdwi6cQ5vmYBYulsiyefy1MrNht1RLfb8lByE1PZQ/bQfnZH5z3DZmkKxO4Yi9CfKRhjjkFihVvPk+2ndNCqwwbdV9zIzzFyGU2lo7dgn+A9zVkpwX9NNjVoFRK7wDaX30/LpctXbuyXSvyvUqlNguwszHDFKzCWFG1ESrGY6M8i+lutOb5OGDkVMtrRW6jxv7KLux/fFGpsN3ODbTI4/sEE1uhEU8FtZlgjwl7NQL4hmSiSqtBK3x1k9W4cScqmkkBA1EdKwsh9qu6nWFipedFMrxnvbLzczXr1RLzBpuyFqnVwpkPHlC+Gi2Ap+YfOZavKKOEOF21GKEU37Mt8PMvyrFvk6zS52SB8FdnIi/am5qlLY4Nvic0oveP/xKw4ElRTQNpemEUNJI/uNUOvaZjM61HYrsPU97VPEUAGwwbeFGcrvvI+SVUYLtPIjoMSGExChjii13wxPwtkMqpUi6ZtsXx9cdG1OZzkre7NUDRIgFuQZtjyMdIusBwd5ge4L6zNPe2cwMRyY/2BnEJWjLnLDK0iVtt3+NPIMW9iUFFG0mlZykBeIRuiETAotq+4xtgt3yrOms8Qau7laV9FsoGxJQ7pGH3ngzWQpUahZ3rAO4sxlr4Sc4YHI8KxvTWeF1jtXBzAHajqJoW/wEMA5LNRPzUf1mtYBgT8Zsj3Ie8B5SWipNAuEy+WfHULaOWA2aEmq9eNjADt2qE1bQoeuQORKUI9ScgpfNmCuhe5y8xdNQ9BBiYskZmqfx4jOIdptyxr1unYFon+CmpGFnAOKqPOs30CNBgbOEPe/8uxeVOC9szq1lXEsbtRADATIgJC4f6PuBb+DKQ5VOqIJ4wqVP944Y4bVr6Hy1Pt6HKmjuczEfWR3GLKlzWdumWvhyYGu8kaCbPowD5lAi0abC3gW62sdA3M14UKOWhCypYfgcAknKIXVyXFpj7cN0xZ1Tqjjk6DO2e37TXVX5jqgBvqUIS1XaI4RE7eADb5d1Pm8xmAewonotKZLDZtR1rbJ2RoD4v0AZUtbWHA9vyHf5EjsnW91ITrmJmg6dmPq+KJgp2MDETE3FUSuAZPsEpSW6GjJQzhhn2EjDlizmpY9p6MRU7CeaQ4yANnSQ8sThpPBCXhNfXRPwBleueS9HTUH/EE3LrCKaOWQhrLkl9l+XbixfMN5+iYayKPDacijuRm4DCSnroUrLATZfsqZlRFI3XPovBc6Mrx0hzQZrgmxuLPa3G2IUA0md54aERJOYsEK7g9jfwUzWIv9cB+wbWEyu/5dJ4kECKD0Q56DhTnTpqDTEBqH09lnpJU2aPG5ebVMFUmGc9kp5lgyN0GGYtMhzYcJtGSLmxBha6P9lSKx9EKKlT55UJ203zG3yS0KeZTCrBV3c9k52EAByJYsYdZw4Q1kov2Rjhe1N+U/1XCV7NGLafvnMORRCqNX3IoCJhjKka3dLsgncANZ6UM61SE7mZZsWn9ZUU+mOSJv7Wye47fMoOUbxPtyZUvYQUfzKEOgBbJwAFl+O11RoeF+da/5wSjb5bJ/fhQHCHuQPBlwrhTZFGyVPIZwpgrVhZGD64bnZHwwWiblBKlexN/+68acSNnKmwlStM91OkIQzjLoOrmiveemjaC06Rk8eoFtizmqAJGw4BA9ubIlue7uj0UF5sWbyJX0K9grKoNDNaeeVnk4v4n3DC4QSEdMlVzZXvrceEukLf5qY1spYeqV9E2fXK91cHSurzcBMplonPIAGQnwsjehDWSBo0md/Vt6VUOiUVOTviHZdYDCgI05E/ztAd0uPxWAVFCzYGWILJCFSfXn3c/K7INgKutFaJK6GxXMUYK152BmgB/kNMKFh0i2BSk++3hUDTGy7uLxnVZS2I01ngnhBDhAfJoF5GxASZ5c2dJEBM5zQiycvfYJSM9yRTNd7IDQUIcAYB9pfAYKquofgUZqYhqBNG1hqUmYNmlvb0iJZKmFLYlahF0hUb837N+jrEsxsj0jFogzW8hGpm0LSkGIkXUsS0rPZ0CqHoVGMRMMnASmqIEIMYwJp6DPwMs26DtsNmxGTv88bjaLqATc0BJ4Qd6jRamQz88fJYACqc3gGFQF1qKfSn4eUbDYPQFJe2JlS3MBuA4PqG+UIzj2BpGXqSCpXcZ5WcCpwQNGN0iRre4cwbdLRt65wz66TlcqdaZZkUgynDz9P92YDDdmGqduhCNFttQEsMku6KgNl//fVEGqZFLNLcQC270MnQVaOGgAfATey6uEdlXkJtKTR+KQB5MiLLol7B1nXSzYMj+KD0G6LH2GM6wBIyM9WIMEx/hbYGsY5yIb3ZPLU3W7m/Ob4i8GSCckoP/Ejevm1/ecuwDSlqXHU58Kv9VeUDY2Apgv+WCv9NKuSsrFvlXFRiKXaFzNdW9rVut4VOe1e6RSZKuVnaCAEpD7+H2mRf8spdLvy0qRjp+VuiW/Q/JTuRS++YcV3/EFfgGCECLbsUzZlQIpC18AabyeTejo52YxB8HVHCyYJKaudyRNHmTopsZ4lFrKJevFE0G4OyBEaYtmXQRlGNOOsQI80wi8IGmA7JVsIHZUYFnGnAR6EL0nJb1mV7Qrlw9dARMkbLFIwlP82Q6oIpVNF8NCkHwuQZ0zUvHm27fAbxIebUjhNnuKAXLRIo9VKURDVmGxvMYGHrACaVRhRwtiF/nWf6CGL6r5dCV6A0vx1fIwj970UDcGFwbIyJ4QnHKKlkpMm+VSCB8r3obb6oW9JT5uh13Yz5Y4e3xnesAj0ZZUoUJMvZgjq4gPL300cfuGQmVLNhB/lBsIJcQed1aIzkYKaNey3E+lF0eACJms+8lUwJhqAe3bg+onLNELPeSY4m/V6fibFQJ6UnaOLG23xd4wAtXLUWf2lTIJsYBEFg8P/q/upoEywfk8LYrKBHYEzAo6G1kiBGuFJAbz4p4VmbEkxyraXUtc8uzEALHHkBaieanYJjZA3IZBdlKD5qvSZlFPU5zFL2wOkE801oo8dRDKnctjkzUP13CbpyYLeXNMC+9oe0S3HQKJOdEy/3AsbFk35nqtcEdRH+S7uV2P2UBa2x9jx9wyf2h+QtlJDfOKIZa3tL6zpyU7CalVs+Ww/QdHQB4oS2Xx39IzyJ73IMrXPMeWb+sLHKklH/brPL89QjdhOe2bzpD0NPH5V97pqk0IVDg3m9eI3H8sk60a5Or9h5UKeboxVqmnNT+7/34K2wOXNBMl6x+zgVpFa7Czm7h+laKnG0s76ox1qaxTvTB/GGb8vCz1tGTteC9WINOvelqOskD/RPTZobHtQqUyT6tNlGZHbqB/IHWB0q+v61Vl0iOP8f238toLVLbRUrl1P43Tf0XG1Yb/VWVbyllhoPMjCNt/KNNNEV45CT1tK0aeNln3/f9fq+xlfLbJ2g8iC/Q/VQVoyl0yCusAAAAASUVORK5CYII="
          alt=""
          onClick={goToHome}
          style={{ cursor: "pointer" }}
        />
      </div>
      {/* 웹사이트 크기가 줄어들면 menu-search가 list부분을 넘어옴! (문제) */}
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="menu-search">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            className="search-ip"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
