import React from "react";
import Card from "../card/card";
const cardList = ({ nameList, deletefunc }) => {
	const cards = nameList.map(({ id, ...otherProps }) => (
		<Card key={id} {...otherProps} id={id} deletefunc={deletefunc} />
	));

	return <div>{cards}</div>;
};

export default cardList;
