'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Home,
  Settings,
  User,
  FileText,
  BarChart3,
  Mail,
  Bell,
  Search,
} from 'lucide-react';

export default function SidebarExamples() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Sidebar</CardTitle>
          <CardDescription>Simple sidebar with navigation menu</CardDescription>
        </CardHeader>
        <CardContent>
          <SidebarProvider>
            <div className="flex h-[400px] border rounded-lg">
              <Sidebar>
                <SidebarHeader>
                  <div className="px-4 py-2 font-semibold">My App</div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Home />
                        <span>Home</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <User />
                        <span>Profile</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarContent>
              </Sidebar>
              <SidebarInset>
                <div className="p-4">
                  <SidebarTrigger />
                  <div className="mt-4">Main content area</div>
                </div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Groups</CardTitle>
          <CardDescription>Sidebar with grouped menu items</CardDescription>
        </CardHeader>
        <CardContent>
          <SidebarProvider>
            <div className="flex h-[400px] border rounded-lg">
              <Sidebar>
                <SidebarHeader>
                  <div className="px-4 py-2 font-semibold">Navigation</div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <Home />
                            <span>Home</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <FileText />
                            <span>Documents</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                  <SidebarGroup>
                    <SidebarGroupLabel>Settings</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <Settings />
                            <span>Settings</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <User />
                            <span>Profile</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
              <SidebarInset>
                <div className="p-4">
                  <SidebarTrigger />
                  <div className="mt-4">Content with grouped navigation</div>
                </div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Header and Footer</CardTitle>
          <CardDescription>Sidebar with header and footer sections</CardDescription>
        </CardHeader>
        <CardContent>
          <SidebarProvider>
            <div className="flex h-[400px] border rounded-lg">
              <Sidebar>
                <SidebarHeader>
                  <div className="px-4 py-2 font-semibold flex items-center gap-2">
                    <BarChart3 />
                    <span>Dashboard</span>
                  </div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Home />
                        <span>Home</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <BarChart3 />
                        <span>Analytics</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Mail />
                        <span>Messages</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarContent>
                <SidebarFooter>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarFooter>
              </Sidebar>
              <SidebarInset>
                <div className="p-4">
                  <SidebarTrigger />
                  <div className="mt-4">Content with header and footer</div>
                </div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Floating Variant</CardTitle>
          <CardDescription>Sidebar with floating style</CardDescription>
        </CardHeader>
        <CardContent>
          <SidebarProvider>
            <div className="flex h-[400px] border rounded-lg">
              <Sidebar variant="floating">
                <SidebarHeader>
                  <div className="px-4 py-2 font-semibold">Floating</div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Home />
                        <span>Home</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarContent>
              </Sidebar>
              <SidebarInset>
                <div className="p-4">
                  <SidebarTrigger />
                  <div className="mt-4">Content with floating sidebar</div>
                </div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inset Variant</CardTitle>
          <CardDescription>Sidebar with inset style</CardDescription>
        </CardHeader>
        <CardContent>
          <SidebarProvider>
            <div className="flex h-[400px] border rounded-lg bg-muted/50">
              <Sidebar variant="inset">
                <SidebarHeader>
                  <div className="px-4 py-2 font-semibold">Inset</div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Home />
                        <span>Home</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarContent>
              </Sidebar>
              <SidebarInset>
                <div className="p-4">
                  <SidebarTrigger />
                  <div className="mt-4">Content with inset sidebar</div>
                </div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Icon Mode</CardTitle>
          <CardDescription>Collapsed sidebar showing only icons</CardDescription>
        </CardHeader>
        <CardContent>
          <SidebarProvider defaultOpen={false}>
            <div className="flex h-[400px] border rounded-lg">
              <Sidebar collapsible="icon">
                <SidebarHeader>
                  <div className="px-4 py-2 font-semibold">App</div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Home">
                        <Home />
                        <span>Home</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Search">
                        <Search />
                        <span>Search</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Notifications">
                        <Bell />
                        <span>Notifications</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Settings">
                        <Settings />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarContent>
              </Sidebar>
              <SidebarInset>
                <div className="p-4">
                  <SidebarTrigger />
                  <div className="mt-4">Click the trigger to expand/collapse</div>
                </div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </CardContent>
      </Card>
    </div>
  );
}

