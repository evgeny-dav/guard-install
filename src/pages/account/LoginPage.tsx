
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Guard<span className="text-guard-accent">Install</span>
          </h1>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Добро пожаловать
          </h2>
          <p className="mt-2 text-gray-600">
            Войдите в личный кабинет или создайте аккаунт
          </p>
        </div>

        <Card>
          <CardHeader>
            <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="login" className="flex-1">Вход</TabsTrigger>
                <TabsTrigger value="register" className="flex-1">Регистрация</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <TabsContent value="login" className="mt-0">
              <form className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="email@example.com" type="email" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Пароль</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-guard-DEFAULT focus:ring-guard-DEFAULT"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Запомнить меня
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link to="/account/reset-password" className="text-guard-DEFAULT hover:text-guard-accent">
                      Забыли пароль?
                    </Link>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Войти
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register" className="mt-0">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="first-name">Имя</Label>
                    <Input id="first-name" placeholder="Иван" required />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="last-name">Фамилия</Label>
                    <Input id="last-name" placeholder="Иванов" required />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="email@example.com" type="email" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" type="tel" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new-password">Пароль</Label>
                  <Input id="new-password" type="password" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirm-password">Подтверждение пароля</Label>
                  <Input id="confirm-password" type="password" required />
                </div>
                <div className="flex items-center">
                  <input
                    id="agree-terms"
                    name="agree-terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-guard-DEFAULT focus:ring-guard-DEFAULT"
                    required
                  />
                  <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
                    Я согласен с <a href="#" className="text-guard-DEFAULT hover:text-guard-accent">условиями использования</a>
                  </label>
                </div>
                <Button type="submit" className="w-full">
                  Зарегистрироваться
                </Button>
              </form>
            </TabsContent>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
