import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './navbar.css';
import '../../styles/bootstrap.css';
import { InavbarProps } from './InavbarProps';


export default class NavBasicExample extends React.Component<InavbarProps>{
    constructor(props: InavbarProps) {
        super(props)
        
    }
   
    
    render() {
        let navbarLeft: JSX.Element[] = this.props.titulos.map((item)=> <div>{item.name}</div> )


        return (
            <div>
               {navbarLeft}
            </div>
        )
    }
}



