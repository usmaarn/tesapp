import {RiSwitchFill, RiCloseCircleFill} from 'react-icons/ri';
import  {TbChevronDown} from 'react-icons/tb';
import {VscSettings} from 'react-icons/vsc';
import {FaHome} from 'react-icons/fa';
import {AiOutlineAudit} from 'react-icons/ai';

const Sidebar = () => {
    return(
        <div className="h-screen shadow bg-white py-10 overflow-y-auto">
            <SidebarItem link="#" label="Switch Organization" icon={RiSwitchFill} />
            <SidebarItem link="#" icon={FaHome} label="Dashboard"  />
            <SidebarGroup label="customers">
                <SidebarItem link="#" icon={FaHome} label="Users"  />
                <SidebarItem link="#" icon={FaHome} label="guarantors"  />
                <SidebarItem link="#" icon={FaHome} label="loans"  />
                <SidebarItem link="#" icon={FaHome} label="decision models"  />
                <SidebarItem link="#" icon={FaHome} label="savings"  />
                <SidebarItem link="#" icon={FaHome} label="loan request"  />
                <SidebarItem link="#" icon={FaHome} label="whitelists"  />
                <SidebarItem link="#" icon={FaHome} label="karma"  />
            </SidebarGroup>
            <SidebarGroup label="businesses">
                <SidebarItem link="#" icon={FaHome} label="organizations"  />
                <SidebarItem link="#" icon={FaHome} label="loan products"  />
                <SidebarItem link="#" icon={FaHome} label="savings products"  />
                <SidebarItem link="#" icon={FaHome} label="fees and charges"  />
                <SidebarItem link="#" icon={FaHome} label="transactions"  />
                <SidebarItem link="#" icon={FaHome} label="services"  />
                <SidebarItem link="#" icon={FaHome} label="service account"  />
                <SidebarItem link="#" icon={FaHome} label="settlements"  />
                <SidebarItem link="#" icon={FaHome} label="reports"  />
            </SidebarGroup>
            <SidebarGroup label="settings">
                <SidebarItem link="#" icon={VscSettings} label="preference"  />
                <SidebarItem link="#" icon={RiCloseCircleFill} label="fees & pricings"  />
                <SidebarItem link="#" icon={AiOutlineAudit} label="audit logs"  />
            </SidebarGroup>
        </div>
    )
}

type SidebarGroupProps = {
    label: String,
    children: any,
}

const SidebarGroup = (props: SidebarGroupProps) => {
    return (
        <ul className="">
            <li className='uppercase py-1 px-5 font-semibold mt-5'>{ props.label }</li>
            {props.children}
        </ul>
    )
}

type SidebarItemProps = {
    icon: any,
    label: String,
    link: String,
}

const SidebarItem = (props: SidebarItemProps) =>  {
    const {icon: Icon, label, link} = props;
    return (
        <li className='transition-all duration-200 cursor-pointer flex gap-2 items-center px-5 py-3 hover:bg-secondary/10 hover:border-l-4 hover:text-secondary hover:border-l-secondary'>
            <Icon />
            <span className='capitalize'>{label}</span>
        </li>
    )
}


export default Sidebar;