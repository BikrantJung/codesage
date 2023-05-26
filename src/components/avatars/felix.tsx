import React, { HTMLAttributes } from "react";

export const AvatarFelix = (
  props: HTMLAttributes<HTMLOrSVGElement> & { height?: number; width?: number }
) => {
  const { height = 24, width = 24, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="m20.947.068 1.087.145.652.145c.652.072 1.231.217 1.81.507.58-.29 1.305-.435 1.957-.507a10.722 10.722 0 0 1 5.579 1.014 9.056 9.056 0 0 1 3.26 2.39l1.376.29c.797.29 1.594.653 2.319 1.16a7.796 7.796 0 0 1 1.738 2.318l.435 1.232.073.29v.144a16.808 16.808 0 0 0 2.463 5.072c.507.724 1.014 1.521 1.376 2.318.435.87.797 1.811.652 2.826-.072.942-.434 1.81-1.159 2.463l-.217 1.087c-.29.797-.725 1.666-1.45 2.246.218.434.436.869.508 1.376.145 1.087 0 2.246-.507 3.26-.145.218-.29.29-.507.363l-.073-.58-.072-.362c-.145-1.015-.797-1.956-1.522-2.68a3.405 3.405 0 0 1-.652 3.26c-.507.651-1.304 1.159-2.028 1.593-.362.145-.725.29-1.087.145l-.145-.217c-.072-.145-.217-.218-.217-.363-.145-.507-.145-1.086-.145-1.666v-.434c0-1.16.145-2.246.29-3.406-.725-.29-1.304-.869-1.739-1.521-.652-.87-.87-1.884-.942-2.97-.145-2.174.435-4.347 1.811-6.086l-.434-.362-.29-.29c-1.304-1.087-1.884-2.536-2.319-4.13-.217-.87-.29-1.883 0-2.68-.29 0-.652-.073-.724-.363-.072-.507.217-1.014.507-1.376l-.942.507-.362.145-.724.435c-.435.217-.87.507-1.377.652-.145.072-.29-.073-.435-.145l-.362-.218c-.942-.652-1.883-1.231-2.898-1.666.218.29.435.652.435 1.014-.073.218-.073.435-.29.507l-.942-.072-.362-.072h-2.029c-.58 1.376-.869 2.753-1.159 4.202a38.537 38.537 0 0 1-2.1 6.593c-.58 1.231-1.377 2.318-2.32 3.332-.579.58-1.158 1.014-1.81 1.45 1.304.796 2.173 2.028 2.825 3.332 1.232 2.39 2.101 4.926 2.246 7.607a8.368 8.368 0 0 1-.797 3.985c-.362.941-1.16 1.738-2.1 2.173-.58.29-1.305.362-1.957.362a3.513 3.513 0 0 1-1.521-.58 5.506 5.506 0 0 0-2.898.508l-.073.072c-.29.218-.58.363-.797.725-.362.434-.58.942-.724 1.521v.073c0 .145 0 .217-.145.217-.218-.362-.29-.797-.29-1.232 0-.652.362-1.231.652-1.81l.87-.798a3.04 3.04 0 0 1-1.015-.652 5 5 0 0 1-1.594-2.753c-.362.073-.724.145-1.086.073a4.745 4.745 0 0 1-3.043-1.377 6.433 6.433 0 0 1-1.16-1.594l-.217-.217-.145-.073-1.014-1.231c-.652-1.087-1.014-2.391-.942-3.695.073-1.304.435-2.608 1.16-3.695l.796-.797c-.507-.942-.87-2.029-.87-3.115v-.87a7.317 7.317 0 0 1 1.957-8.91c.724-.653 1.594-1.233 2.536-1.305C6.602 6.733 7.76 5.212 9.138 3.98A17.025 17.025 0 0 1 16.093.43c1.594-.435 3.188-.507 4.854-.362Zm16.229 5.216c.941.507 1.81 1.16 2.318 2.101.362.797.507 1.594.724 2.391l.363 1.449a12.679 12.679 0 0 0 1.956 3.622c.58.87 1.159 1.74 1.594 2.609.29.724.434 1.521.29 2.318l-.508-1.594c-.434-1.087-1.014-1.956-1.594-2.97l-.072-.145-.652-.87-.073-.072-.434-.725-.507-.724-.073-.435-.072-.145a12.172 12.172 0 0 0-3.26-6.81Zm-16.23 3.333.725-1.811a20.98 20.98 0 0 0-2.97.434c-.58 1.087-1.087 2.101-1.449 3.333-.435 1.666-.507 3.405-.652 5.071v.435c-.073 1.304-.217 2.608-.58 3.84a14.563 14.563 0 0 0 3.405-6.23l.725-2.32.724-2.607.073-.145Zm-15.793.507-.797 2.101v.072l-.072.218c-1.304 1.304-2.246 3.188-2.753 4.999a6.52 6.52 0 0 1 1.956-6.23c.507-.436 1.086-.87 1.666-1.16ZM1.386 25.063a5.217 5.217 0 0 1 1.086-1.956l-.652.652a6.376 6.376 0 0 0-.434 6.085l-.218-1.956c-.072-.942-.072-1.883.218-2.825Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        d="M23.7 3.183c4.13-.145 8.332 1.304 11.52 4.057a15.142 15.142 0 0 1 5.288 13.766c-.072.29-.072.58-.29.869l-.072-.217v-2.391A15.577 15.577 0 0 0 27.685 4.342 17.025 17.025 0 0 0 8.123 15.427a16.543 16.543 0 0 0-.434 8.404c.434-.145.87-.145 1.231-.145.145.073.363.073.435.218.073.144 0 .217-.072.29l-.87.29c-1.014.216-1.956.579-2.68 1.303a4.564 4.564 0 0 0-1.594 3.26c0 .87.217 1.74.58 2.536.579.942 1.376 1.739 2.39 2.246a6.01 6.01 0 0 0 4.492.507c.145-.072.29-.145.435-.072.145.072.217.29.29.434l1.086 2.174a15.577 15.577 0 0 0 5.216 4.564c2.03 1.087 4.275 1.522 6.52 1.884.218.072.58.072.725.29.073.145 0 .217-.145.29l-.796.072a16.736 16.736 0 0 1-10.65-4.492c.362 1.304.58 2.608.58 3.912 0 .87-.146 1.667-.435 2.464a7 7 0 0 1-1.377 1.883 14.202 14.202 0 0 1-4.347 3.116c-.072-.073.072-.145.145-.218l1.232-1.014c.941-.87 1.81-1.666 2.535-2.753a6.738 6.738 0 0 0 1.232-4.71l-.29-2.825-.145-.724-.87-1.232c-.361-.724-.796-1.449-.941-2.246a6.739 6.739 0 0 1-6.955-2.246 5.868 5.868 0 0 1-1.377-3.695c0-.87.218-1.666.58-2.463.652-1.16 1.666-2.101 2.898-2.608-.58-2.246-.58-4.492-.217-6.738.58-2.898 1.883-5.578 3.694-7.824 3.26-3.913 8.332-6.303 13.476-6.376Z"
      />
      <path
        fill="#fff"
        d="M27.685 4.342a15.504 15.504 0 0 1 12.46 14.925v2.39c-.072.363-.144.725-.072 1.087-.145.145-.217.218-.217.363-.217 1.304-.072 2.68.072 3.984.29 2.101.435 4.275.145 6.376-.217 2.028-.941 4.057-2.173 5.723-1.16 1.522-2.753 2.464-4.492 3.116-1.087.434-2.173.652-3.26.941-.797.145-1.594.29-2.319.58.073.145.29.073.435.145.87.072 1.739-.072 2.608-.145a4.506 4.506 0 0 0-.652 1.884c-.144.724.145 1.376.652 1.883.435.508 1.087.797 1.74 1.015.361.145.796.217 1.23.217.508.652.943 1.304 1.015 2.173.145.87-.072 1.74-.58 2.464-.651 1.014-1.593 1.666-2.68 2.173a14.41 14.41 0 0 1-4.13 1.304c-4.701.754-9.52.177-13.91-1.666-1.304-.724-2.753-1.666-3.478-3.043-.29-.507-.579-1.16-.434-1.739 1.304-.724 2.39-1.666 3.405-2.753a7.004 7.004 0 0 0 1.377-1.883c.29-.797.434-1.594.434-2.464 0-1.304-.217-2.608-.58-3.912a17.026 17.026 0 0 0 10.65 4.492l.797-.072c.145-.073.218-.145.145-.29-.145-.218-.507-.218-.724-.29-2.246-.362-4.492-.797-6.52-1.884-1.305-.724-2.609-1.594-3.623-2.68-.58-.58-1.16-1.232-1.594-1.884l-1.087-2.174c-.072-.145-.144-.362-.29-.434-.144-.073-.29 0-.434.072a5.94 5.94 0 0 1-6.883-2.753c-.362-.797-.58-1.666-.58-2.536.073-1.231.653-2.463 1.595-3.26.724-.724 1.666-1.086 2.68-1.304l.87-.29c.072-.072.145-.145.072-.29-.072-.144-.29-.144-.435-.217-.362 0-.797 0-1.231.145a16.543 16.543 0 0 1 .434-8.404A17.098 17.098 0 0 1 27.685 4.342Z"
      />
      <path
        fill="#000"
        d="m40.073 22.744.218.218.072.942.218 3.26c.217 1.449.362 2.898.362 4.347 0 1.159-.073 2.318-.362 3.405-.435 2.028-1.45 4.057-2.898 5.506a12.605 12.605 0 0 1-6.376 3.333c-.072.652-.29 1.159-.29 1.81-.072.436.145.725.363 1.088.58.58 1.304 1.014 2.028 1.376l1.304.652c-.217.217-.58.073-.87.145-.434 0-.869-.072-1.23-.217-.653-.218-1.305-.508-1.74-1.015-.507-.507-.796-1.159-.652-1.883.073-.652.29-1.304.652-1.884-.869.072-1.738.217-2.608.145-.145-.073-.362 0-.434-.145.724-.29 1.521-.435 2.318-.58 1.087-.29 2.173-.507 3.26-.941 1.739-.652 3.333-1.594 4.492-3.116 1.232-1.666 1.956-3.695 2.173-5.723.29-2.101.145-4.275-.145-6.376-.144-1.304-.29-2.68-.072-3.984 0-.145.072-.218.217-.363ZM7.471 27.091c.435 0 .87.073 1.087.435.145.217.145.507.073.724-.218.58-.652 1.015-.797 1.594-.073.29 0 .508.217.652.507.363 1.16.508 1.739.725l-.145.145h-.797c-.435-.073-.87-.145-1.232-.363-.362-.29-.652-.796-.507-1.304.145-.652.652-1.086.87-1.666-.508-.29-1.015-.145-1.45-.58a.943.943 0 0 1 .942-.362ZM37.828 20.354c.434.144.941.507 1.086 1.014a.691.691 0 0 1-.217.87c-.362.144-.725 0-.87-.29-.217-.218-.507-.508-.869-.58-.29-.073-.652 0-.942.145l.29.362c.29.435.362 1.014.362 1.521 0 .508-.145 1.015-.29 1.45.218-.073.435-.29.725-.29 0 .29 0 .507-.145.724-.362.435-.942.725-1.521.797-.58.072-1.232.145-1.74-.217-.361-.218-.361-.58-.361-.942l-.145-.435c0-.724.29-1.376.652-1.956a5.285 5.285 0 0 1 2.1-1.884c.58-.29 1.233-.434 1.885-.29Zm-15.07 3.332c1.014.145 2.029.435 3.043.797.217.073.435.073.58.29.29.217.29.652 0 .87-.218.144-.508.144-.797.144h-3.26c-.942 0-2.03.073-2.971-.072l-.507-.218-1.014.145c-.145 0-.363 0-.435-.145-.217-.145-.145-.434 0-.58.145-.144.435-.216.652-.289.652-.145 1.304-.29 1.956-.29l.652-.072-1.16-.073c-.434-.072-.94 0-1.376-.145-.144 0-.217-.072-.217-.217 0-.145.145-.145.217-.217l1.087-.145c1.16-.073 2.39 0 3.55.217ZM25.076 13.978c.58.072 1.16.145 1.667.435.362.29.58.652.724 1.014l-.145.145c-.145.072-.29-.072-.434-.145-.652-.435-1.522-.507-2.319-.507-.652 0-1.304.145-1.956.435-.58.217-1.231.362-1.739.652l-1.376.507c-.942.362-1.956.362-2.898.724-.507.218-.87.652-1.304.942l-.652.652c.072-.58.362-1.16.724-1.594l.942-.942c.507-.434 1.232-.652 1.884-.796.724-.145 1.376-.435 2.1-.653l1.377-.362c.58-.145 1.087-.362 1.667-.434l1.738-.073Zm12.027 1.014c.507.073 1.014.29 1.594.29v.217c-.507.435-1.087.652-1.739.725-.87.145-1.884-.073-2.68.217l-.363.218c-.652.724-1.014 1.594-1.449 2.463-.145-.507.218-1.087.362-1.594.145-.507.508-.87.653-1.377.29-.652 1.014-1.159 1.738-1.159h1.884ZM32.176 30.496v.073c-.29.58-.796 1.087-1.449 1.304-.217.072-.507.072-.651-.073v-.29c.507-.362 1.159-.651 1.738-.869l.362-.145Z"
      />
      <path
        fill="#000"
        d="M22.976 33.901c.217 0 .362.145.507.29l.941.507c.797.363 1.667.58 2.464.797 1.086.363 2.173.435 3.26.435.87.072 1.666.145 2.463.072l.29.145c-1.304.653-2.97.797-4.42.725-1.666-.072-3.332-.58-4.781-1.304-.435-.29-.942-.58-1.014-1.16-.073-.217.072-.507.29-.507Z"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M22.396.285A15.794 15.794 0 0 0 5.443 9.124a23.401 23.401 0 0 0-1.811 13.475l.29 1.377c.072.217.217.435.362.435l.29.072h.072c.362.435.87.725 1.449.87.87.29 1.884.29 2.753.144-.217 1.16.072 2.464.507 3.55.362.87.942 1.812 1.666 2.464a4.855 4.855 0 0 0 3.695 1.014c.363-.072.652-.29.942-.58v-.072l.145-.362h-.217c-.218 0-.363 0-.58-.145-.797-.435-1.376-1.232-1.811-2.029-.725-1.449-1.087-3.115-1.087-4.709.942-.435 1.739-1.16 2.39-1.956l.508-.362.29-.145c.652-.435 1.232-1.014 1.811-1.594 1.232-1.45 2.174-3.115 2.826-4.854a32.085 32.085 0 0 0 1.159-4.565c.29-1.448.58-2.97 1.231-4.346a13.404 13.404 0 0 1 2.464.072l.87.072c.216-.072.289-.29.289-.507 0-.362-.218-.724-.435-1.014a19.705 19.705 0 0 1 3.26 1.884c.145.145.363.217.508.145a12.46 12.46 0 0 0 1.883-.942l.435-.29 1.014-.507c-.217.362-.507.87-.507 1.304 0 .217.217.362.435.362.797.073 1.521-.072 2.318-.29l.29-.072c.29-.073.58.145.797.29.652.652 1.087 1.594 1.159 2.463.126.84.126 1.695 0 2.536l-.072.797-.073 1.086-.145 2.681c.145 1.16.58 2.318 1.45 3.115.651.652 1.593.87 2.462.652.435-.145.87-.434 1.16-.724.362-.29.507-.652.507-1.16l-.797.29-1.014.29v-.58c.29-.217.58-.506.724-.796l-.145-.652-.072-.508-.218-1.666-.217-1.811-.072-.507c-.145-1.014-.29-1.956-.653-2.97a11.737 11.737 0 0 0-3.042-4.927c-.435-.29-.797-.507-1.304-.652a9.853 9.853 0 0 0-2.826-2.608C31.524 1.082 30.293.647 28.99.43 27.902.285 26.67.213 25.656.503l-1.16.362c-.651-.29-1.376-.435-2.1-.58Zm-1.45 8.332c.218-.58.363-1.232.725-1.811a20.98 20.98 0 0 0-2.97.434c-.507.942-1.014 1.956-1.304 2.97a16.808 16.808 0 0 0-.725 5.145c-.145 1.521-.217 3.115-.652 4.564 1.377-1.45 2.464-3.26 3.043-5.144.435-1.087.725-2.174 1.015-3.333.29-.941.507-1.883.869-2.753v-.072Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
