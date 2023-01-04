import { Menu, MenuProps } from "antd";
import {
  AntDesignOutlined,
  UnorderedListOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(<Link to="/">Home</Link>, 'home', <AntDesignOutlined />),

  getItem('카센터 관리', 'a_tab', <UnorderedListOutlined />, [
    getItem(<Link to="/shop">카센터 목록</Link>, 'shop'),
    getItem(<Link to="/shop/enroll">카센터 등록</Link>, 'shop_enroll'),
  ]),

  getItem('제품 관리', 'a_tab', <UnorderedListOutlined />, [
    getItem(<Link to="/product">제품 목록</Link>, 'product'),
    getItem(<Link to="/product/enroll">제품 등록</Link>, 'product_enroll'),
  ]),

  getItem('정비목록 관리', 'a_tab', <UnorderedListOutlined />, [
    getItem(<Link to="/maintenance">정비목록 목록</Link>, 'review'),
    getItem(<Link to="/maintenance/enroll">정비목록 등록</Link>, 'review_enroll'),
  ]),

  getItem('회원 관리', 'a_tab', <UnorderedListOutlined />, [
    getItem(<Link to="/user">회원목록</Link>, 'user')]),

  getItem('리뷰 관리', 'a_tab', <UnorderedListOutlined />, [
    getItem(<Link to="/review">리뷰 목록</Link>, 'review'),
    getItem(<Link to="/review/enroll">리뷰 등록</Link>, 'review_enroll'),
  ]),
];

const CtcMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click : ', e);
  };

  return (
    <Menu
        onClick={onClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['home']}
        mode="inline"
        items={items}
    />
  );
};

export default CtcMenu;