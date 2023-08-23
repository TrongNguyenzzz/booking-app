import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem"> Germany </li>
                    <li className="fListItem"> Berlin </li>
                    <li className="fListItem"> San Francisco </li>
                </ul>

                <ul className="fList">
                    <li className="fListItem"> Vietnam </li>
                    <li className="fListItem"> Hanoi </li>
                    <li className="fListItem"> Dongha </li>
                    
                </ul>

                <ul className="fList">
                    <li className="fListItem"> United States </li>
                    <li className="fListItem"> New York </li>
                    <li className="fListItem"> Los Angeles </li>

                </ul>

                <ul className="fList">
                    <li className="fListItem"> United Kingdom </li>
                    <li className="fListItem"> London </li>
                    <li className="fListItem"> Seattle </li>
                </ul>

                <ul className="fList">
                    <li className="fListItem"> Hungary </li>
                    <li className="fListItem"> Budapest </li>
                    <li className="fListItem"> Tucson </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;