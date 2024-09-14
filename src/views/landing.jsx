import Header from "../components/header"
import Footer from "../components/footer"
import CustomButton from "../components/custom-button"
import { useNavigate } from "react-router-dom"
import MainPhoto from '../assets/task-manager-landing.png'
import SecondaryPhoto from '../assets/task-manager-landing-2.png'
import Brands from '../assets/task-manager-brands.png'
import Team_1 from '../assets/equipo-1.jpeg'
import Team_2 from '../assets/equipo-2.jpeg'
import Team_3 from '../assets/equipo-3.jpeg'
import Team_4 from '../assets/equipo-4.jpeg'
import { Instagram, Twitter, Meta } from "../assets/svg_logos"

const Landing = () => {

    const navigate = useNavigate()

    return (
    <>
        <Header>
            <CustomButton 
                onClick={()=> navigate('/login')}
                className="info_bg action"
            >
                Log in
                <span className="material-symbols-outlined">
                login
                </span>
            </CustomButton>
        </Header>
        <main className="landing">

            <section>
                <div className="inside">
                    <img src={MainPhoto} alt="Muestra de la aplicación"/>
                    <div>
                        <h1 className="text_xxl">Organiza tu trabajo y tu vida, por fin!</h1>
                        <p className="text_m">Bienvenido a Task Manager, la solución perfecta para organizar tus tareas y simplificar tu vida y la de tu equipo. Nuestra aplicación está diseñada para ayudarte a gestionar todas tus tareas y listas de pendientes de manera eficiente, asegurándote de que nunca más olvides una fecha límite importante.</p>
                    </div>
                </div>
            </section>


            <section>
                <div className="inside">
                    <h3 className="text_l">Características Principales</h3>
                    <ul>
                        <li>
                            <span className="material-symbols-outlined">add</span>
                            <p>Nombre de la Tarea:</p>
                            <p>Personaliza cada tarea con un nombre claro y específico para identificar rápidamente lo que necesitas hacer.</p>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">add</span>
                            <p>Tipo de Tarea:</p>
                            <p>Clasifica tus tareas según su tipo para mantener todo ordenado y facilitar la búsqueda y el seguimiento.</p>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">add</span>
                            <p>Estatus: </p>
                            <p>Actualiza el estado de tus tareas para saber siempre qué está pendiente, en progreso o completado.</p>
                        </li>
                    </ul>
                </div>
            </section>


            <section>
                <div className="inside">
                    <div>
                        <p className="text_xl">Simplifica la gestión de tus tareas y experimenta la tranquilidad de tener todo bajo control con Task Manager.</p>
                        <img src={SecondaryPhoto} alt="Muestra 2 de la aplicación"/>
                    </div>
                    <p className="text_xl">¡Empieza hoy y transforma tu forma de trabajar!</p>
                    <CustomButton 
                        onClick={()=> navigate('/login')}
                        className="info_bg action"
                    >
                        LOGIN
                        <span className="material-symbols-outlined">
                        login
                        </span>
                    </CustomButton>
                </div>
            </section>


            <section>
                <div className="inside">
                    <p className="text_xl">Con la confianza de + 225.000 clientes de todo el mundo</p>
                    <img src={Brands} alt="Marcas con las que colabora task manager"/>
                </div>
            </section>
            <section>
                <div className="inside">
                    <div>
                        <div className="text_container">
                            <h3 className="text_xxl">Nuestro Equipo</h3>
                            <p className="text_m">En Task Manager, contamos con un equipo dedicado y apasionado por la eficiencia y la organización. Nuestro equipo está compuesto por profesionales expertos en desarrollo de software, diseño de interfaces de usuario y gestión de proyectos, todos comprometidos en crear la mejor experiencia para nuestros usuarios.</p>
                        </div>
                        <div className="team_container">
                            <div className="team_member_container">
                                <img src={Team_1} alt="Miembro del equipo 1"/>
                                <div>
                                    <p className="text_m">Juan Pérez</p>
                                    <p className="text_s">CEO & Founder</p>
                                </div>
                            </div>
                            <div className="team_member_container">
                                <img src={Team_2} alt="Miembro del equipo 2"/>
                                <div>
                                    <p className="text_m">Gloria Nuñez</p>
                                    <p className="text_s">Desarrolladora</p>
                                </div>
                            </div>
                            <div className="team_member_container">
                                <img src={Team_3} alt="Miembro del equipo 3"/>
                                <div>
                                    <p className="text_m">Alba Garcia</p>
                                    <p className="text_s">Diseñadora UI/UX</p>
                                </div>
                            </div>
                            <div className="team_member_container">
                                <img src={Team_4} alt="Miembro del equipo 4"/>
                                <div>
                                    <p className="text_m">Pedro Gil</p>
                                    <p className="text_s">Gestor de proyectos</p>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer className="landing">
            <h3 className="text_l">
                <span className="material-symbols-outlined">
                    select_check_box
                </span>
                Task manager.</h3>
            <div>
                <p>Síguenos</p>
                <div>
                    <span><Instagram /></span>
                    <span><Twitter /></span>
                    <span><Meta /></span>
                </div>
            </div>
        </Footer>
    </>
    )
}

export default Landing