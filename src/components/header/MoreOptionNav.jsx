import { Dropdown } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faBell, faDownload, faEllipsisVertical, faHeadset } from '@fortawesome/free-solid-svg-icons';
import "./UserData.css"
import { NavLink } from 'react-router-dom';

function MoreOptionNav() {
    return (
        <>
            <div className="navbtn mt-auto mb-auto dark:text-slate-400 hover:dark:text-slate-100">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={<FontAwesomeIcon icon={faEllipsisVertical} />}>

                    <Dropdown.Item>
                        <NavLink to='/notificationPreferences'>
                            <FontAwesomeIcon icon={faBell} /> Notification Preferences
                        </NavLink >
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <NavLink to='/customerCare'>
                            <FontAwesomeIcon icon={faHeadset} /> 24x7 Customer Care
                        </NavLink >
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <NavLink to='/advertise'>
                            <FontAwesomeIcon icon={faArrowTrendUp} /> Advertise
                        </NavLink >
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <NavLink to='/downloadApp'>
                            <FontAwesomeIcon icon={faDownload} /> Download App
                        </NavLink >
                    </Dropdown.Item>

                </Dropdown>
            </div>
        </>
    )
}

export default MoreOptionNav
