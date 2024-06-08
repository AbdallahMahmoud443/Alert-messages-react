import { ReactNode } from "react";
import "./index.scss"
import { CircleX } from "lucide-react";
import { AlertTypes } from "../../types/types";



interface IProps {
title:string,
icon:ReactNode,
description?:string,
type:AlertTypes,
children?:ReactNode

}

const AlertMessages =({title,description,icon,type,children}:IProps)=>{
    return(
        <>
            <div className={type}>
            <div className="alert-wrapper">
                <div className="alert-title">
                    <div className="title-icon">
                    {icon}  
                    <h4>{title}</h4>
                    </div>
                    <CircleX />
                </div>
                <div className="alert-body">
                    {children ? children : <p>{description}</p>}
                </div>
            </div>
            </div>

        </>
    );
};

export default AlertMessages;