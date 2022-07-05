import { useNavigate } from 'react-router-dom';

const Layout = ({ children, buttons }) =>  {
    const navigate = useNavigate();
    return (
        <div className="mt-12 mx-24">
            <header className="flex justify-between">
                <div className="inline-flex items-end">
                    <h1 className="text-7xl">WorkOut&Health</h1>
                    <figure><img src="/img/IconoPrincipal.png" alt="Icono-Principal" className="w-20 h-20" /></figure>
                </div>
                <div className="flex space-x-6">
                    {buttons?.map( (btn) => (
                            <button key={btn.name} onClick={() => navigate(btn.route)} className="btn w-fit rounded-full">
                                {btn.name}
                            </button>
                        )
                    )}
                </div>
            </header>
            { children }
        </div>
    )
};

export default Layout; 