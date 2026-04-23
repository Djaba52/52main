import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Settings,
  Share2,
  Edit,
  FileText,
  Users,
  Mail,
  Globe,
  Tag,
  Image as ImageIcon,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border-4 border-white shadow-lg dark:border-gray-800">
              <AvatarImage src="" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Игнатий</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">разработчик</p>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">Создаю вещи</p>
            </div>
          </div>
          <div className="flex gap-2 self-end sm:self-center">
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Редактировать
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <FileText className="h-6 w-6 text-blue-500" />
              <span className="mt-2 text-2xl font-bold">52</span>
              <span className="text-xs text-gray-500">Публикации</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <Users className="h-6 w-6 text-green-500" />
              <span className="mt-2 text-2xl font-bold">2</span>
              <span className="text-xs text-gray-500">Подписчика(мама папа)</span>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">О себе</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Привет!
            </p>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Навыки</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Нос", "Есть"].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  >
                    <Tag className="mr-1 h-3 w-3" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Контакты</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:ivan@example.com" className="hover:underline">@example.com</a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Globe className="h-4 w-4" />
                <a href="#" className="hover:underline">.dev</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="posts">Все посты</TabsTrigger>
              <TabsTrigger value="docs">Документы</TabsTrigger>
            </TabsList>
            <TabsContent value="posts" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <p>Список всех постов пользователя...</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="docs">
              <Card>
                <CardContent className="p-4">
                  <p>Документы и файлы...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}