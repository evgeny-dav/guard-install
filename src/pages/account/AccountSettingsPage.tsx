
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Lock, Bell, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AccountSettingsPage = () => {
  const { toast } = useToast();
  
  const [profileForm, setProfileForm] = useState({
    firstName: 'Иван',
    lastName: 'Петров',
    email: 'ivan@example.com',
    phone: '+7 (999) 123-45-67',
  });
  
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    smsNotifications: false,
  });
  
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNotificationChange = (name, checked) => {
    setNotifications(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Profile submitted:', profileForm);
    
    toast({
      title: 'Профиль обновлен',
      description: 'Ваши данные успешно сохранены',
    });
  };
  
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast({
        title: 'Ошибка изменения пароля',
        description: 'Новый пароль и подтверждение не совпадают',
        variant: 'destructive',
      });
      return;
    }
    
    console.log('Password submitted:', passwordForm);
    
    toast({
      title: 'Пароль изменен',
      description: 'Ваш пароль успешно обновлен',
    });
    
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };
  
  const handleNotificationsSubmit = (e) => {
    e.preventDefault();
    console.log('Notifications submitted:', notifications);
    
    toast({
      title: 'Настройки уведомлений обновлены',
    });
  };

  return (
    <div className="py-8">
      <div className="guard-container">
        <h1 className="text-2xl font-bold mb-6">Настройки аккаунта</h1>
        
        <Tabs defaultValue="profile">
          <div className="mb-8">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-md">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Профиль</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Безопасность</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>Уведомления</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="profile">
            <Card>
              <form onSubmit={handleProfileSubmit} className="p-6 space-y-4">
                <h2 className="text-lg font-semibold mb-4">Личные данные</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={profileForm.firstName}
                      onChange={handleProfileChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Фамилия
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={profileForm.lastName}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profileForm.email}
                      onChange={handleProfileChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={profileForm.phone}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button type="submit">
                    Сохранить изменения
                  </Button>
                </div>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <form onSubmit={handlePasswordSubmit} className="p-6 space-y-4">
                <h2 className="text-lg font-semibold mb-4">Изменение пароля</h2>
                
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Текущий пароль
                  </label>
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    value={passwordForm.currentPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Новый пароль
                  </label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={passwordForm.newPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Подтверждение пароля
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={passwordForm.confirmPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                
                <div className="pt-4">
                  <Button type="submit" disabled={!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword}>
                    Изменить пароль
                  </Button>
                </div>
                
                <div className="pt-6 border-t mt-8">
                  <h2 className="text-lg font-semibold mb-4">Двухфакторная аутентификация</h2>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Защита с помощью SMS</h3>
                      <p className="text-sm text-gray-500">Получать SMS-код при входе в аккаунт</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <form onSubmit={handleNotificationsSubmit} className="p-6 space-y-6">
                <h2 className="text-lg font-semibold mb-4">Настройки уведомлений</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Обновления заказов</h3>
                      <p className="text-sm text-gray-500">Получать уведомления о статусе заказов</p>
                    </div>
                    <Switch 
                      checked={notifications.orderUpdates} 
                      onCheckedChange={(checked) => handleNotificationChange('orderUpdates', checked)} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Акции и скидки</h3>
                      <p className="text-sm text-gray-500">Получать информацию о специальных предложениях</p>
                    </div>
                    <Switch 
                      checked={notifications.promotions} 
                      onCheckedChange={(checked) => handleNotificationChange('promotions', checked)} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Новостная рассылка</h3>
                      <p className="text-sm text-gray-500">Получать ежемесячную рассылку новостей</p>
                    </div>
                    <Switch 
                      checked={notifications.newsletter} 
                      onCheckedChange={(checked) => handleNotificationChange('newsletter', checked)} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">SMS-уведомления</h3>
                      <p className="text-sm text-gray-500">Получать уведомления по SMS</p>
                    </div>
                    <Switch 
                      checked={notifications.smsNotifications} 
                      onCheckedChange={(checked) => handleNotificationChange('smsNotifications', checked)} 
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button type="submit">
                    Сохранить настройки
                  </Button>
                </div>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
