import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.97 0C4.464 0 0 4.465 0 9.97c0 4.403 2.875 8.134 6.789 9.48.49.06.673-.245.673-.49v-1.712c-2.753.611-3.364-1.346-3.364-1.346-.428-1.162-1.101-1.468-1.101-1.468-.917-.611.061-.611.061-.611.979.06 1.53 1.04 1.53 1.04.917 1.528 2.323 1.1 2.874.856a2.13 2.13 0 01.611-1.346c-2.201-.245-4.526-1.1-4.526-4.954 0-1.101.367-1.957 1.04-2.691-.061-.184-.428-1.223.122-2.569 0 0 .857-.245 2.753 1.04.795-.245 1.651-.306 2.507-.306.857 0 1.713.122 2.508.306 1.896-1.285 2.752-1.04 2.752-1.04.55 1.346.184 2.385.123 2.63a3.956 3.956 0 011.04 2.691c0 3.853-2.325 4.648-4.527 4.893.367.306.673.918.673 1.835v2.752c0 .245.184.55.673.49A9.98 9.98 0 0020 9.97C19.939 4.464 15.474 0 9.97 0z"
      />
    </Svg>
  );
};

export default Icon;
