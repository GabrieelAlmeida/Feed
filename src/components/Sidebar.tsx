import styles from './Sidebar.module.css'
import myProfile from '../assets/my-profile.jpg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

interface Profile {
    profile: string;
    role?: string | null;
}
export function Sidebar(props: Profile) {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <Avatar src={myProfile}/>
                <strong>{props.profile}</strong>
                <span>{props.role}</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}