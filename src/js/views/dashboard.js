import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../utilities/signOut";

export const Dashboard = () => {
	const history = useHistory();
	return (
		<>
			<h1>LogedIn</h1>
			<button
				onClick={() => {
					try {
						signOut();
						history.push("/");
					} catch (e) {
						alert(e.message);
					}
				}}>
				LogOut
			</button>
		</>
	);
};
