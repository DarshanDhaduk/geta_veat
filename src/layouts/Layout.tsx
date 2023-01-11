import React, { FC } from 'react'

interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }: any) => {

    return(
    <div>
        <div {...props}>{children}</div>
    </div>
)};

export default Layout;