import { AppSidebar } from '@/shared/ui/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/shared/ui/sidebar';
import { CreateScenario } from '@/widgets/create-scenario';


export default function Home() {
    return (
        <div className="flex flex-1 h-screen">
            <div>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarTrigger className="p-6" />
                </SidebarProvider>
            </div>
            <div className="flex max-w-[700px] w-full mx-auto flex-col flex-1 py-4">
                <div className="flex flex-col flex-1">main</div>
                <CreateScenario />
            </div>
        </div>
    );
}
