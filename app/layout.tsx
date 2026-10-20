import type {Metadata} from "next";import "./globals.css";import "./nova.css";import "./image-upgrade.css";import "./multiline.css";import "./mobile-catalog.css";
export const metadata:Metadata={title:"Base de datos Tecni Cristal",description:"Dashboard técnico de perfiles, herrajes, felpudos y guarniciones de Tecni Cristal."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
