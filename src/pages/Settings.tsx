import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input'; // Assuming you might want an Input component later
import { Label } from '../components/ui/Label'; // Assuming you might want a Label component later

// Placeholder Input component (replace with actual implementation if needed)
const InputPlaceholder: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" {...props} />
);

// Placeholder Label component (replace with actual implementation if needed)
const LabelPlaceholder: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (props) => (
  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" {...props} />
);


const Settings: React.FC = () => {
  return (
    <main className="flex-1 p-4 md:p-6">
      <h1 className="mb-4 text-2xl font-semibold md:text-3xl">Settings</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Update your personal information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <LabelPlaceholder htmlFor="name">Name</LabelPlaceholder>
              <InputPlaceholder id="name" placeholder="Your Name" defaultValue="Admin User" />
            </div>
            <div className="space-y-2">
              <LabelPlaceholder htmlFor="email">Email</LabelPlaceholder>
              <InputPlaceholder id="email" type="email" placeholder="Your Email" defaultValue="admin@example.com" />
            </div>
             <div className="space-y-2">
              <LabelPlaceholder htmlFor="avatar">Avatar URL</LabelPlaceholder>
              <InputPlaceholder id="avatar" placeholder="https://..." />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Profile</Button>
          </CardFooter>
        </Card>

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Manage your account settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="space-y-2">
              <LabelPlaceholder htmlFor="current-password">Current Password</LabelPlaceholder>
              <InputPlaceholder id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <LabelPlaceholder htmlFor="new-password">New Password</LabelPlaceholder>
              <InputPlaceholder id="new-password" type="password" />
            </div>
             <div className="space-y-2">
              <LabelPlaceholder htmlFor="confirm-password">Confirm New Password</LabelPlaceholder>
              <InputPlaceholder id="confirm-password" type="password" />
            </div>
          </CardContent>
           <CardFooter className="flex justify-between">
            <Button>Change Password</Button>
             <Button variant="destructive">Delete Account</Button>
          </CardFooter>
        </Card>

         {/* Notification Settings */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Configure your notification preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             {/* Add Checkbox/Switch components here when available */}
             <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive important updates via email.</p>
                </div>
                {/* Placeholder for a Switch */}
                <div className="h-6 w-10 rounded-full bg-primary p-1">
                    <div className="h-4 w-4 rounded-full bg-primary-foreground"></div>
                </div>
             </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Get notified directly in the app.</p>
                </div>
                 {/* Placeholder for a Switch */}
                <div className="h-6 w-10 rounded-full bg-muted p-1">
                    <div className="h-4 w-4 rounded-full bg-background"></div>
                </div>
             </div>
          </CardContent>
           <CardFooter>
            <Button>Save Preferences</Button>
          </CardFooter>
        </Card>

      </div>
    </main>
  );
};

export default Settings;
