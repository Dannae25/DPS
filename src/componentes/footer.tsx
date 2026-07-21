export default function Footer (){
    return(
        <footer className="bg-neutral text-neutral-content">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-sm md:text-base">Contactos</h6>
                        <a className="link link-hover text-xs md:text-sm"
                            href="https://github.com/Dannae25/DPS.git"
                            target="_blank">
                            GitHub
                        </a>
                        <a className="link link-hover text-xs md:text-sm">Instagram</a>
                    </nav>
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-sm md:text-base">Creado</h6>
                        <a className="text-xs md:text-sm">Daniela Gutiérrez</a>
                        <p className="text-xs md:text-sm">Escuela de computación</p>
                        <a className="link link-hover text-xs md:text-sm" href="https://www.udb.edu.sv/udb/"
                            target="_blank">Universidad Don Bosco</a>
                    </nav>
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-sm md:text-base">Legal</h6>
                        <a className="link link-hover text-xs md:text-sm" href="https://www.flaticon.com/" target="_blank">
                            Iconos creados por: {"Flaticon"}
                        </a>
                        <a className="link link-hover text-xs md:text-sm">Privacy policy</a>
                        <a className="link link-hover text-xs md:text-sm">Cookie policy</a>
                    </nav>
                </div>

                <div className="mt-8 w-full flex justify-center border-t border-neutral-600 pt-6">
                    <p className="text-xs md:text-sm text-center">
                        Copyright © {new Date().getFullYear()} - Derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};