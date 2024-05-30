export const metadata = {
    title: 'Myke-Gadget Admin',
    description: 'Myke-Gadget Admin Dashboard',
}

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
    <div>
        <div>Nav</div>
        {children}
    </div>
    );
}
 
export default AdminLayout;