import React from 'react';

const MessegerIcon = ({ active = false, color = '#666666' }) => {
    return (
        <span
            role="img"
            aria-label="container"
            className="anticon anticon-container ant-menu-item-icon">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2833_14720)">
                    <path
                        d="M21.99 5.86C21.98 5.68 21.97 5.49 21.93 5.31C21.91 5.22 21.89 5.13 21.87 5.04C21.85 4.97 21.85 4.9 21.83 4.83C21.81 4.75 21.77 4.67 21.74 4.6C21.71 4.51 21.68 4.43 21.64 4.35C21.57 4.19 21.48 4.04 21.39 3.89C21.36 3.84 21.33 3.78 21.29 3.73C21.15 3.53 21 3.35 20.83 3.18C20.81 3.16 20.78 3.14 20.76 3.12C20.61 2.98 20.45 2.85 20.29 2.73C20.23 2.69 20.16 2.65 20.1 2.61C19.96 2.53 19.82 2.45 19.68 2.38C19.6 2.34 19.52 2.31 19.44 2.28C19.29 2.22 19.13 2.17 18.97 2.13C18.89 2.11 18.82 2.09 18.74 2.07C18.5 2.03 18.25 2 18 2H6C5.75 2 5.5 2.03 5.26 2.07C5.18 2.09 5.11 2.11 5.03 2.13C4.87 2.17 4.72 2.22 4.57 2.28C4.48 2.31 4.4 2.34 4.32 2.38C4.18 2.45 4.04 2.52 3.91 2.61C3.84 2.65 3.77 2.69 3.7 2.73C3.54 2.85 3.39 2.97 3.24 3.11C3.22 3.14 3.19 3.16 3.16 3.18C3 3.35 2.85 3.53 2.71 3.73C2.67 3.79 2.64 3.85 2.6 3.91C2.52 4.05 2.44 4.2 2.37 4.35C2.33 4.43 2.29 4.53 2.26 4.62C2.23 4.69 2.2 4.76 2.17 4.84C2.15 4.91 2.14 4.97 2.13 5.04C2.11 5.13 2.08 5.22 2.07 5.32C2.04 5.5 2.02 5.67 2.02 5.85C2.01 5.9 2 5.95 2 6V18C2 20.21 3.79 22 6 22H18C20.21 22 22 20.21 22 18V6C22 5.95 21.99 5.91 21.99 5.86ZM18 4C18.2 4 18.38 4.04 18.56 4.09C18.6 4.1 18.65 4.11 18.69 4.13C18.85 4.19 19.01 4.27 19.15 4.37C19.19 4.4 19.23 4.43 19.26 4.46C19.37 4.55 19.48 4.66 19.57 4.78C19.59 4.81 19.62 4.84 19.64 4.87C19.74 5.02 19.82 5.19 19.88 5.36C19.89 5.4 19.91 5.44 19.92 5.48C19.97 5.67 20 5.86 20 6.05V6.07C19.98 6.7 19.66 7.3 19.11 7.67L13.11 11.67C12.78 11.88 12.4 12 12 12C11.6 12 11.22 11.88 10.89 11.66L4.89 7.66C4.34 7.3 4.02 6.7 4 6.06C4 5.87 4.03 5.67 4.08 5.48C4.09 5.44 4.1 5.4 4.11 5.37C4.17 5.19 4.25 5.02 4.35 4.87C4.38 4.84 4.4 4.81 4.42 4.78C4.51 4.66 4.62 4.55 4.74 4.45C4.78 4.43 4.81 4.4 4.85 4.37C4.99 4.27 5.15 4.19 5.31 4.13C5.35 4.11 5.39 4.1 5.44 4.09C5.62 4.04 5.8 4 6 4H18ZM18 20H6C4.9 20 4 19.1 4 18V9.47L9.78 13.32C10.45 13.78 11.23 14 12 14C12.77 14 13.55 13.78 14.22 13.33L20 9.47V18C20 19.1 19.1 20 18 20Z"
                        fill={color}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2833_14720">
                        <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(2 2)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </span>
    );
};
export default MessegerIcon;
