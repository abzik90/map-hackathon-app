import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import Menu from "./Menu/Menu";
import CreateFrom from "./createFrom/CreateFrom";
import ModifyFrom from "./ModifyFrom";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/create" element={<CreateFrom/>} />
            <Route path="/modify/:id" element={<ModifyFrom/>} />
            <Route path="*" element={<Navigate to="/menu"/>}/>
        </Routes>
    );
};

export default AppRoutes;