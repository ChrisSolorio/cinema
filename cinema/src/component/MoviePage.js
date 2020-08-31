import React, { Fragment, useEffect, useState } from "react";
import DataList from './DataList';
import ReactDom from "react-dom";




export default ({match:{params:{id}}}) => <h1>{id}</h1>