import { NavbarProps } from '../components/Navbar/Navbar.types';

export const useTopNav = (props: NavbarProps) => {
    const { title = 'Navbar' } = props;

    return {
        title,
    };
};
