import { FiArrowDown } from 'react-icons/fi';
import { IoAddCircleSharp, IoBicycleSharp } from 'react-icons/io5';
import SidebarLink from './Components/SidebarLink';
import SidebarLinkSection from './Components/SidebarLinkSection';

const SidebarLinks = () => {
    return (
        <div className="mt-1 flex flex-col gap-2.5 overflow-y-auto 1152:overflow-x-hidden px-4 Dashboard_Sidebar-SidebarLinks">
            {/* these are just for test */}
            {/*
                use children to pass icon and use
                react-icons instead of SVGs
            */}
            <SidebarLinkSection title={'test'}>
                <SidebarLink href={'/'} text={'Overview'}>
                    <FiArrowDown />
                </SidebarLink>
                <SidebarLink href={'/overview2'} text={'Overview2'}>
                    <IoBicycleSharp />
                </SidebarLink>
                <SidebarLink href={'/add-new-product'} text={'add product'}>
                    <IoAddCircleSharp />
                </SidebarLink>
            </SidebarLinkSection>
        </div>
    );
};
export default SidebarLinks;
