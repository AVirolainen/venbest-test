import 'antd/dist/antd.css';
import "./UserCard.css";
import { Card } from "antd";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserCard = (props) => {
	let title = props.info.lastname + " " + props.info.name 
	return (
		<div className="cardComponent">
			<Card
				title={title}
				extra={<a href="#">More</a>}
				className="userCard"
			>
				<div className="cardInner">
					<div className="avatarContainer">
						<Avatar size={100} icon={<UserOutlined />} />
					</div>
					<div className="infoContainer">
						<p>{props.info.sex == "f" ? "Жінка" : "Чоловік"}</p>
						<p>{props.info.age}{" "}років</p>
					</div>
				</div>

			</Card>
		</div>
	);
};

export default UserCard;
