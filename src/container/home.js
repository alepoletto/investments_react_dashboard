import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/index';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}   from 'material-ui/Table';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

const tableData = [{
  stock: 'CYRE3',
  qnt: 400,
  paid: 11.15,
  sold: null ,
  current: 11.58
}]

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
    textAlign: 'center'
  },
};

class Home extends Component {

  componentWillMount(){
    this.props.fetchStocks();
  }

  render() {

    if(this.props.stocks.length === 0) {
      console.log('ruin');
    return (
      <CardText style={{position: 'relative'}}>
      <RefreshIndicator
        size={40}
        left={-20}
        top={50}
        status={'loading'}
        style={{marginLeft: '50%'}}
      />
    </CardText>
    );

    }

    console.log(this.props.stocks);
    return (

       <div>
         <Table
           size="600px"
           fixedHeader={true}
           fixedFooter={true}
           selectable={true}
           multiSelectable={true}
         >
           <TableHeader
             displaySelectAll={true}
             adjustForCheckbox={true}
             enableSelectAll={true}
           >
             <TableRow>
               <TableHeaderColumn colSpan="8"  style={
                   {textAlign: 'center',
                     color: '#4DB6AC',
                     fontSize: '32px'}}>
                 Suas Ações
               </TableHeaderColumn>
             </TableRow>
             <TableRow>
               <TableHeaderColumn colSpan="8" style={
                   {textAlign: 'left'}}>
                 <FlatButton label="Add" primary={true} rippleColor="#4DB6AC" />
               </TableHeaderColumn>
             </TableRow>
             <TableRow>
               <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
               <TableHeaderColumn tooltip="Stock">Stock</TableHeaderColumn>
               <TableHeaderColumn tooltip="Quantity">QNT</TableHeaderColumn>
               <TableHeaderColumn tooltip="Price Paid">Paid</TableHeaderColumn>
               <TableHeaderColumn tooltip="Invested">Invested</TableHeaderColumn>
               <TableHeaderColumn tooltip="Current Value">Current</TableHeaderColumn>
               <TableHeaderColumn tooltip="Current Value">Lost/Gain</TableHeaderColumn>
               <TableHeaderColumn tooltip="Current Value">%</TableHeaderColumn>
             </TableRow>
           </TableHeader>
           <TableBody
             displayRowCheckbox={true}
             deselectOnClickaway={true}
             showRowHover={true}
             stripedRows={true}
           >
             {tableData.map( (row, index) => (
               <TableRow key={index} selected={row.selected}>
                 <TableRowColumn>{index}</TableRowColumn>
                 <TableRowColumn>{row.stock}</TableRowColumn>
                 <TableRowColumn>{row.qnt}</TableRowColumn>
                 <TableRowColumn>R$ {row.paid}</TableRowColumn>
                 <TableRowColumn>R$ {row.qnt * row.paid}</TableRowColumn>
                 <TableRowColumn>R$ {this.props.stocks[0]}</TableRowColumn>
                 <TableRowColumn>R$ {(row.qnt * row.current) - (row.qnt * row.paid) }</TableRowColumn>
                  <TableRowColumn>R$ {((row.qnt * row.current) - (row.qnt * row.paid))/ (row.qnt * row.paid)  }</TableRowColumn>
               </TableRow>
               ))}
           </TableBody>
           <TableFooter
             adjustForCheckbox={true}
           >
             <TableRow>
               <TableRowColumn>ID</TableRowColumn>
               <TableRowColumn>Name</TableRowColumn>
               <TableRowColumn>Status</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                 Super Footer
               </TableRowColumn>
             </TableRow>
           </TableFooter>
         </Table>
       </div>
     );
   }
}

function mapStateToProps(state){

  return {
    stocks: state.stocks.all
  }
}

export default connect(mapStateToProps,{ fetchStocks })(Home);
