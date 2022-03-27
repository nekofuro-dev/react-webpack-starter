import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Outlet } from "react-router-dom";

/**
 *
 * @returns main layout (include top nav)
 */
function App() {
    return (
        <>
            <div id="page-root" className="text-lg">
                {/* page layout (e.g. navBar) */}

                {/* main content container */}
                <Outlet />
            </div>
        </>
    );
}

export default hot(App);
