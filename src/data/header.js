export const header = {
  logo: {
    src: "./digischool_logo.png",
    alt: "logo",
    href: "/",
  },
  links: [
    {
      label: "Digischool",
      href: "#home",
    },
    {
      label: "Tính năng",
      href: "#features",
    },
    {
      label: "Vai trò",
      href: "#",
      hasDropdown: true,
      icon: "tabler:chevron-down",
      dropdownItems: [
        {
          label: "Học sinh",
          href: "#students",
        },
        {
          label: "Giáo viên",
          href: "#teachers",
        },
        {
          label: "Quản lý",
          href: "#managers",
        },
        {
          label: "Phụ huynh",
          href: "#parents",
        },
      ],
    },
    {
      label: "Hướng dẫn",
      href: "#tutorials",
    },
    {
      label: "Câu hỏi thường gặp",
      href: "#faqs",
    },
  ],
  buttons: [
    {
      label: "Sign In",
      href: "#",
      color: "transparent",
      size: "small",
    },
    {
      label: "Sign Up",
      href: "#",
      color: "dark",
      size: "small",
    },
  ],
};
