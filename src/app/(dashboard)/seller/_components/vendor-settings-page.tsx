"use client"

import { useState } from "react"
import {
    AlertCircle,
    Bell,
    Box,
    CreditCard,
    FileText,
    HelpCircle,
    Home,
    Lock,
    Package,
    Percent,
    Settings,
    ShoppingBag,
    Truck,
    Users,
    Wallet,
    Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"

export default function VendorSettingsPage() {
    const [activeTab, setActiveTab] = useState("store")

    return (
        <div className="flex min-h-screen bg-muted/40">
            {/* Settings Sidebar */}
            <div className="hidden w-64 flex-col border-r bg-background p-6 md:flex">
                <div className="flex items-center gap-2 font-semibold text-lg mb-6">
                    <Settings className="h-5 w-5" />
                    <span>Store Settings</span>
                </div>

                <nav className="grid gap-2 text-sm">
                    <h3 className="font-medium text-xs text-muted-foreground mb-1 mt-4">STORE MANAGEMENT</h3>
                    <Button
                        variant={activeTab === "store" ? "secondary" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab("store")}
                    >
                        <Home className="mr-2 h-4 w-4" />
                        Store Profile
                    </Button>
                    <Button
                        variant={activeTab === "payment" ? "secondary" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab("payment")}
                    >
                        <CreditCard className="mr-2 h-4 w-4" />
                        Payment Methods
                    </Button>
                    <Button
                        variant={activeTab === "shipping" ? "secondary" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab("shipping")}
                    >
                        <Truck className="mr-2 h-4 w-4" />
                        Shipping Options
                    </Button>
                    <Button
                        variant={activeTab === "tax" ? "secondary" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab("tax")}
                    >
                        <Percent className="mr-2 h-4 w-4" />
                        Tax Settings
                    </Button>

                    <h3 className="font-medium text-xs text-muted-foreground mb-1 mt-4">PRODUCT MANAGEMENT</h3>
                    <Button
                        variant={activeTab === "inventory" ? "secondary" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab("inventory")}
                    >
                        <Box className="mr-2 h-4 w-4" />
                        Inventory
                    </Button>
                    <Button
                        variant={activeTab === "orders" ? "secondary" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab("orders")}
                    >
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Orders
                    </Button>

                    <h3 className="font-medium text-xs text-muted-foreground mb-1 mt-4">ACCOUNT SETTINGS</h3>
                    <Button
                        variant={activeTab === "users" ? "secondary" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab("users")}
                    >
                        <Users className="mr-2 h-4 w-4" />
                        Staff & Users
                    </Button>
                    <Button
                        variant={activeTab === "notifications" ? "secondary" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab("notifications")}
                    >
                        <Bell className="mr-2 h-4 w-4" />
                        Notifications
                    </Button>
                    <Button
                        variant={activeTab === "security" ? "secondary" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab("security")}
                    >
                        <Lock className="mr-2 h-4 w-4" />
                        Security & Privacy
                    </Button>

                    <h3 className="font-medium text-xs text-muted-foreground mb-1 mt-4">ADVANCED</h3>
                    <Button
                        variant={activeTab === "integrations" ? "secondary" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab("integrations")}
                    >
                        <Zap className="mr-2 h-4 w-4" />
                        Integrations
                    </Button>
                    <Button
                        variant={activeTab === "billing" ? "secondary" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab("billing")}
                    >
                        <Wallet className="mr-2 h-4 w-4" />
                        Billing
                    </Button>
                    <Button
                        variant={activeTab === "help" ? "secondary" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab("help")}
                    >
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Help & Support
                    </Button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <div className="flex items-center justify-between border-b px-6 py-4">
                    <div>
                        <h1 className="text-xl font-semibold">
                            {activeTab === "store" && "Store Profile"}
                            {activeTab === "payment" && "Payment Methods"}
                            {activeTab === "shipping" && "Shipping Options"}
                            {activeTab === "tax" && "Tax Settings"}
                            {activeTab === "inventory" && "Inventory Management"}
                            {activeTab === "orders" && "Order Management"}
                            {activeTab === "users" && "Staff & Users"}
                            {activeTab === "notifications" && "Notifications"}
                            {activeTab === "security" && "Security & Privacy"}
                            {activeTab === "integrations" && "Integrations"}
                            {activeTab === "billing" && "Billing"}
                            {activeTab === "help" && "Help & Support"}
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            {activeTab === "store" && "Manage your store information and branding"}
                            {activeTab === "payment" && "Configure payment gateways and methods"}
                            {activeTab === "shipping" && "Set up shipping zones and delivery options"}
                            {activeTab === "tax" && "Configure tax rates and settings"}
                            {activeTab === "inventory" && "Manage your product inventory"}
                            {activeTab === "orders" && "View and manage customer orders"}
                            {activeTab === "users" && "Manage staff accounts and permissions"}
                            {activeTab === "notifications" && "Configure email and app notifications"}
                            {activeTab === "security" && "Manage security settings and privacy policies"}
                            {activeTab === "integrations" && "Connect with third-party services"}
                            {activeTab === "billing" && "Manage your subscription and billing"}
                            {activeTab === "help" && "Get help and support for your store"}
                        </p>
                    </div>
                    <Button>Save Changes</Button>
                </div>

                <div className="p-6">
                    {/* Store Profile Settings */}
                    {activeTab === "store" && (
                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Store Information</CardTitle>
                                    <CardDescription>Update your store details and how they appear to customers</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="store-name">Store Name</Label>
                                            <Input id="store-name" placeholder="Your Store Name" defaultValue="notunbazar Store" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="store-url">Store URL</Label>
                                            <Input id="store-url" placeholder="your-store" defaultValue="notunbazar-store" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="store-description">Store Description</Label>
                                        <Textarea
                                            id="store-description"
                                            placeholder="Describe your store"
                                            defaultValue="We sell high-quality products for everyday use."
                                            className="min-h-[100px]"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="contact-email">Contact Email</Label>
                                            <Input
                                                id="contact-email"
                                                type="email"
                                                placeholder="contact@example.com"
                                                defaultValue="contact@notunbazarstore.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="contact-phone">Contact Phone</Label>
                                            <Input id="contact-phone" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 123-4567" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Store Address</CardTitle>
                                    <CardDescription>Set your physical store location or business address</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="address-line1">Address Line 1</Label>
                                        <Input id="address-line1" placeholder="123 Main St" defaultValue="123 Commerce Ave" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="address-line2">Address Line 2 (Optional)</Label>
                                        <Input id="address-line2" placeholder="Suite 100" defaultValue="Suite 200" />
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                        <div className="space-y-2">
                                            <Label htmlFor="city">City</Label>
                                            <Input id="city" placeholder="City" defaultValue="San Francisco" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="state">State/Province</Label>
                                            <Input id="state" placeholder="State" defaultValue="California" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="zip">ZIP/Postal Code</Label>
                                            <Input id="zip" placeholder="ZIP Code" defaultValue="94103" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="country">Country</Label>
                                        <Select defaultValue="us">
                                            <SelectTrigger id="country">
                                                <SelectValue placeholder="Select a country" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="us">United States</SelectItem>
                                                <SelectItem value="ca">Canada</SelectItem>
                                                <SelectItem value="uk">United Kingdom</SelectItem>
                                                <SelectItem value="au">Australia</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Store Branding</CardTitle>
                                    <CardDescription>Customize your store's visual identity</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label>Store Logo</Label>
                                            <div className="flex items-center gap-4">
                                                <div className="h-20 w-20 rounded-md border bg-muted flex items-center justify-center">
                                                    <Package className="h-10 w-10 text-muted-foreground" />
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Upload Logo
                                                </Button>
                                            </div>
                                            <p className="text-xs text-muted-foreground">Recommended size: 512x512px. Max file size: 2MB.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Favicon</Label>
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-md border bg-muted flex items-center justify-center">
                                                    <Package className="h-5 w-5 text-muted-foreground" />
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Upload Favicon
                                                </Button>
                                            </div>
                                            <p className="text-xs text-muted-foreground">Recommended size: 32x32px. Max file size: 1MB.</p>
                                        </div>
                                    </div>

                                    <Separator className="my-4" />

                                    <div className="space-y-2">
                                        <Label>Store Colors</Label>
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-5 w-5 rounded-full bg-primary" />
                                                    <span className="text-sm">Primary</span>
                                                </div>
                                                <Input type="color" defaultValue="#0f172a" className="h-10 p-1" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-5 w-5 rounded-full bg-secondary" />
                                                    <span className="text-sm">Secondary</span>
                                                </div>
                                                <Input type="color" defaultValue="#64748b" className="h-10 p-1" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-5 w-5 rounded-full bg-destructive" />
                                                    <span className="text-sm">Accent</span>
                                                </div>
                                                <Input type="color" defaultValue="#ef4444" className="h-10 p-1" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-5 w-5 rounded-full bg-background border" />
                                                    <span className="text-sm">Background</span>
                                                </div>
                                                <Input type="color" defaultValue="#ffffff" className="h-10 p-1" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline">Reset to Defaults</Button>
                                    <Button>Save Branding</Button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Business Hours</CardTitle>
                                    <CardDescription>Set your store's operating hours</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <Switch id="business-hours" defaultChecked />
                                                <Label htmlFor="business-hours">Display business hours on store</Label>
                                            </div>
                                        </div>

                                        <div className="grid gap-4">
                                            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                                                <div key={day} className="flex items-center justify-between border-b pb-2">
                                                    <div className="flex items-center space-x-2">
                                                        <Switch id={`day-${day}`} defaultChecked={day !== "Sunday"} />
                                                        <Label htmlFor={`day-${day}`}>{day}</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Select defaultValue={day !== "Sunday" ? "09:00" : "closed"}>
                                                            <SelectTrigger className="w-[110px]">
                                                                <SelectValue placeholder="Opening" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="closed">Closed</SelectItem>
                                                                <SelectItem value="08:00">8:00 AM</SelectItem>
                                                                <SelectItem value="09:00">9:00 AM</SelectItem>
                                                                <SelectItem value="10:00">10:00 AM</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <span>to</span>
                                                        <Select defaultValue={day !== "Sunday" ? "17:00" : "closed"}>
                                                            <SelectTrigger className="w-[110px]">
                                                                <SelectValue placeholder="Closing" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="closed">Closed</SelectItem>
                                                                <SelectItem value="17:00">5:00 PM</SelectItem>
                                                                <SelectItem value="18:00">6:00 PM</SelectItem>
                                                                <SelectItem value="19:00">7:00 PM</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Social Media</CardTitle>
                                    <CardDescription>Connect your store to social media platforms</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="facebook">Facebook</Label>
                                            <Input id="facebook" placeholder="facebook.com/yourstore" defaultValue="facebook.com/notunbazarstore" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="instagram">Instagram</Label>
                                            <Input
                                                id="instagram"
                                                placeholder="instagram.com/yourstore"
                                                defaultValue="instagram.com/notunbazarstore"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="twitter">Twitter</Label>
                                            <Input id="twitter" placeholder="twitter.com/yourstore" defaultValue="twitter.com/notunbazarstore" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pinterest">Pinterest</Label>
                                            <Input id="pinterest" placeholder="pinterest.com/yourstore" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Payment Methods Settings */}
                    {activeTab === "payment" && (
                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Payment Gateways</CardTitle>
                                    <CardDescription>Configure payment processors for your store</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="rounded-lg border p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                                                    <CreditCard className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Stripe</h3>
                                                    <p className="text-sm text-muted-foreground">Accept credit cards, Apple Pay, Google Pay</p>
                                                </div>
                                            </div>
                                            <Switch id="stripe-enabled" defaultChecked />
                                        </div>

                                        <div className="mt-4 grid gap-4 pl-14">
                                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="stripe-public-key">Public Key</Label>
                                                    <Input id="stripe-public-key" placeholder="pk_test_..." defaultValue="pk_test_51NzT..." />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="stripe-secret-key">Secret Key</Label>
                                                    <Input
                                                        id="stripe-secret-key"
                                                        type="password"
                                                        placeholder="sk_test_..."
                                                        defaultValue="••••••••••••••••••••••"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="stripe-test-mode" defaultChecked />
                                                <Label htmlFor="stripe-test-mode">Test Mode</Label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg border p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                                                    <Wallet className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">PayPal</h3>
                                                    <p className="text-sm text-muted-foreground">Accept PayPal payments</p>
                                                </div>
                                            </div>
                                            <Switch id="paypal-enabled" />
                                        </div>

                                        <div className="mt-4 grid gap-4 pl-14 opacity-50">
                                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="paypal-client-id">Client ID</Label>
                                                    <Input id="paypal-client-id" placeholder="Client ID" disabled />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="paypal-secret">Client Secret</Label>
                                                    <Input id="paypal-secret" type="password" placeholder="Client Secret" disabled />
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Switch id="paypal-test-mode" disabled />
                                                <Label htmlFor="paypal-test-mode">Sandbox Mode</Label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg border p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                                                    <FileText className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Manual Payments</h3>
                                                    <p className="text-sm text-muted-foreground">Bank transfers, checks, cash on delivery</p>
                                                </div>
                                            </div>
                                            <Switch id="manual-enabled" defaultChecked />
                                        </div>

                                        <div className="mt-4 grid gap-4 pl-14">
                                            <div className="space-y-2">
                                                <Label htmlFor="bank-details">Bank Account Details</Label>
                                                <Textarea
                                                    id="bank-details"
                                                    placeholder="Enter your bank details for transfers"
                                                    defaultValue="Bank: Notunbazar Bank
                                                        Account Name: Notunbazar Store Inc.
                                                        Account Number: 1234567890
                                                        Routing Number: 123456789"
                                                    className="min-h-[100px]"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="payment-instructions">Payment Instructions</Label>
                                                <Textarea
                                                    id="payment-instructions"
                                                    placeholder="Instructions for customers"
                                                    defaultValue="Please include your order number in the payment reference. Your order will be processed once payment is received."
                                                    className="min-h-[100px]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Currency Settings</CardTitle>
                                    <CardDescription>Configure your store's currency and formatting</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="currency">Default Currency</Label>
                                            <Select defaultValue="usd">
                                                <SelectTrigger id="currency">
                                                    <SelectValue placeholder="Select currency" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="usd">USD - US Dollar</SelectItem>
                                                    <SelectItem value="eur">EUR - Euro</SelectItem>
                                                    <SelectItem value="gbp">GBP - British Pound</SelectItem>
                                                    <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                                                    <SelectItem value="aud">AUD - Australian Dollar</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="currency-position">Currency Symbol Position</Label>
                                            <Select defaultValue="before">
                                                <SelectTrigger id="currency-position">
                                                    <SelectValue placeholder="Select position" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="before">Before - $100.00</SelectItem>
                                                    <SelectItem value="after">After - 100.00$</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="thousand-separator">Thousand Separator</Label>
                                            <Select defaultValue="comma">
                                                <SelectTrigger id="thousand-separator">
                                                    <SelectValue placeholder="Select separator" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="comma">Comma - 1,000.00</SelectItem>
                                                    <SelectItem value="period">Period - 1.000,00</SelectItem>
                                                    <SelectItem value="space">Space - 1 000.00</SelectItem>
                                                    <SelectItem value="none">None - 1000.00</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="decimal-separator">Decimal Separator</Label>
                                            <Select defaultValue="period">
                                                <SelectTrigger id="decimal-separator">
                                                    <SelectValue placeholder="Select separator" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="period">Period - 1,000.00</SelectItem>
                                                    <SelectItem value="comma">Comma - 1.000,00</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="decimal-places">Decimal Places</Label>
                                        <Select defaultValue="2">
                                            <SelectTrigger id="decimal-places">
                                                <SelectValue placeholder="Select decimal places" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="0">0 - $100</SelectItem>
                                                <SelectItem value="1">1 - $100.0</SelectItem>
                                                <SelectItem value="2">2 - $100.00</SelectItem>
                                                <SelectItem value="3">3 - $100.000</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Shipping Options Settings */}
                    {activeTab === "shipping" && (
                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Shipping Zones</CardTitle>
                                    <CardDescription>Configure shipping rates based on customer location</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="rounded-lg border">
                                        <div className="flex items-center justify-between border-b p-4">
                                            <div>
                                                <h3 className="font-medium">Domestic Shipping (United States)</h3>
                                                <p className="text-sm text-muted-foreground">Shipping within the United States</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="sm">
                                                    Edit
                                                </Button>
                                                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="p-4 space-y-4">
                                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                                <div className="space-y-2">
                                                    <Label>Shipping Method</Label>
                                                    <div className="rounded-md border p-3">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <h4 className="font-medium">Standard Shipping</h4>
                                                                <p className="text-sm text-muted-foreground">3-5 business days</p>
                                                            </div>
                                                            <p className="font-medium">$5.99</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Shipping Method</Label>
                                                    <div className="rounded-md border p-3">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <h4 className="font-medium">Express Shipping</h4>
                                                                <p className="text-sm text-muted-foreground">1-2 business days</p>
                                                            </div>
                                                            <p className="font-medium">$12.99</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Shipping Method</Label>
                                                    <div className="rounded-md border p-3">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <h4 className="font-medium">Free Shipping</h4>
                                                                <p className="text-sm text-muted-foreground">Orders over $50</p>
                                                            </div>
                                                            <p className="font-medium">$0.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg border">
                                        <div className="flex items-center justify-between border-b p-4">
                                            <div>
                                                <h3 className="font-medium">International Shipping</h3>
                                                <p className="text-sm text-muted-foreground">Shipping to countries outside the United States</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="sm">
                                                    Edit
                                                </Button>
                                                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="p-4 space-y-4">
                                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label>Shipping Method</Label>
                                                    <div className="rounded-md border p-3">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <h4 className="font-medium">International Standard</h4>
                                                                <p className="text-sm text-muted-foreground">7-14 business days</p>
                                                            </div>
                                                            <p className="font-medium">$19.99</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Shipping Method</Label>
                                                    <div className="rounded-md border p-3">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <h4 className="font-medium">International Express</h4>
                                                                <p className="text-sm text-muted-foreground">3-5 business days</p>
                                                            </div>
                                                            <p className="font-medium">$39.99</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full">Add Shipping Zone</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Shipping Options</CardTitle>
                                    <CardDescription>Configure general shipping settings</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Switch id="free-shipping" defaultChecked />
                                        <Label htmlFor="free-shipping">Enable free shipping for orders above a certain amount</Label>
                                    </div>
                                    <div className="pl-6 space-y-2">
                                        <Label htmlFor="free-shipping-threshold">Free Shipping Minimum Order Amount</Label>
                                        <div className="flex w-full max-w-sm items-center space-x-2">
                                            <span>$</span>
                                            <Input id="free-shipping-threshold" placeholder="50.00" defaultValue="50.00" />
                                        </div>
                                    </div>

                                    <Separator className="my-4" />

                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-2">
                                            <Switch id="shipping-calculator" defaultChecked />
                                            <Label htmlFor="shipping-calculator">Show shipping calculator on product page</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Switch id="shipping-address-verification" defaultChecked />
                                            <Label htmlFor="shipping-address-verification">Enable shipping address verification</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Switch id="local-pickup" />
                                            <Label htmlFor="local-pickup">Enable local pickup</Label>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Packaging Options</CardTitle>
                                    <CardDescription>Configure packaging settings for your products</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="default-package-type">Default Package Type</Label>
                                            <Select defaultValue="box">
                                                <SelectTrigger id="default-package-type">
                                                    <SelectValue placeholder="Select package type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="box">Box</SelectItem>
                                                    <SelectItem value="envelope">Envelope</SelectItem>
                                                    <SelectItem value="poly-mailer">Poly Mailer</SelectItem>
                                                    <SelectItem value="custom">Custom Package</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="default-weight-unit">Default Weight Unit</Label>
                                            <Select defaultValue="lb">
                                                <SelectTrigger id="default-weight-unit">
                                                    <SelectValue placeholder="Select weight unit" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="lb">Pounds (lb)</SelectItem>
                                                    <SelectItem value="oz">Ounces (oz)</SelectItem>
                                                    <SelectItem value="kg">Kilograms (kg)</SelectItem>
                                                    <SelectItem value="g">Grams (g)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                        <div className="space-y-2">
                                            <Label htmlFor="default-length">Default Length (in)</Label>
                                            <Input id="default-length" placeholder="10" defaultValue="10" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="default-width">Default Width (in)</Label>
                                            <Input id="default-width" placeholder="8" defaultValue="8" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="default-height">Default Height (in)</Label>
                                            <Input id="default-height" placeholder="4" defaultValue="4" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Tax Settings */}
                    {activeTab === "tax" && (
                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Tax Settings</CardTitle>
                                    <CardDescription>Configure tax rates and settings for your store</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Switch id="tax-enabled" defaultChecked />
                                        <Label htmlFor="tax-enabled">Enable tax calculations</Label>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="tax-basis">Tax Calculation Based On</Label>
                                            <Select defaultValue="shipping">
                                                <SelectTrigger id="tax-basis">
                                                    <SelectValue placeholder="Select tax basis" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="shipping">Customer shipping address</SelectItem>
                                                    <SelectItem value="billing">Customer billing address</SelectItem>
                                                    <SelectItem value="store">Store address</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="tax-display">Prices Display</Label>
                                            <Select defaultValue="excluding">
                                                <SelectTrigger id="tax-display">
                                                    <SelectValue placeholder="Select price display" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="excluding">Excluding tax</SelectItem>
                                                    <SelectItem value="including">Including tax</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Switch id="tax-rounding" defaultChecked />
                                        <Label htmlFor="tax-rounding">Round tax at subtotal level instead of per item</Label>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <div className="space-y-1">
                                        <CardTitle>Tax Rates</CardTitle>
                                        <CardDescription>Configure tax rates for different locations</CardDescription>
                                    </div>
                                    <Button size="sm">Add Tax Rate</Button>
                                </CardHeader>
                                <CardContent>
                                    <div className="rounded-md border">
                                        <div className="relative w-full overflow-auto">
                                            <table className="w-full caption-bottom text-sm">
                                                <thead>
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <th className="h-12 px-4 text-left align-middle font-medium">Country</th>
                                                        <th className="h-12 px-4 text-left align-middle font-medium">State/Region</th>
                                                        <th className="h-12 px-4 text-left align-middle font-medium">Rate (%)</th>
                                                        <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                                                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle">United States</td>
                                                        <td className="p-4 align-middle">California</td>
                                                        <td className="p-4 align-middle">7.25%</td>
                                                        <td className="p-4 align-middle">CA State Tax</td>
                                                        <td className="p-4 align-middle">
                                                            <div className="flex items-center gap-2">
                                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                    <AlertCircle className="h-4 w-4" />
                                                                    <span className="sr-only">Edit</span>
                                                                </Button>
                                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                                                    <AlertCircle className="h-4 w-4" />
                                                                    <span className="sr-only">Delete</span>
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle">United States</td>
                                                        <td className="p-4 align-middle">New York</td>
                                                        <td className="p-4 align-middle">8.875%</td>
                                                        <td className="p-4 align-middle">NY State Tax</td>
                                                        <td className="p-4 align-middle">
                                                            <div className="flex items-center gap-2">
                                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                    <AlertCircle className="h-4 w-4" />
                                                                    <span className="sr-only">Edit</span>
                                                                </Button>
                                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                                                    <AlertCircle className="h-4 w-4" />
                                                                    <span className="sr-only">Delete</span>
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle">Canada</td>
                                                        <td className="p-4 align-middle">All Provinces</td>
                                                        <td className="p-4 align-middle">5%</td>
                                                        <td className="p-4 align-middle">GST</td>
                                                        <td className="p-4 align-middle">
                                                            <div className="flex items-center gap-2">
                                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                    <AlertCircle className="h-4 w-4" />
                                                                    <span className="sr-only">Edit</span>
                                                                </Button>
                                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                                                    <AlertCircle className="h-4 w-4" />
                                                                    <span className="sr-only">Delete</span>
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Tax Classes</CardTitle>
                                    <CardDescription>Group products into tax classes for different tax rates</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="rounded-md border p-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-medium">Standard</h3>
                                                <p className="text-sm text-muted-foreground">Default tax class for most products</p>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                Edit
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="rounded-md border p-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-medium">Reduced Rate</h3>
                                                <p className="text-sm text-muted-foreground">For products with reduced tax rates</p>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                Edit
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="rounded-md border p-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-medium">Zero Rate</h3>
                                                <p className="text-sm text-muted-foreground">For tax-exempt products</p>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                Edit
                                            </Button>
                                        </div>
                                    </div>
                                    <Button className="w-full">Add Tax Class</Button>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Placeholder for other tabs */}
                    {activeTab !== "store" && activeTab !== "payment" && activeTab !== "shipping" && activeTab !== "tax" && (
                        <div className="flex items-center justify-center h-64">
                            <div className="text-center">
                                <h3 className="text-lg font-medium">
                                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings
                                </h3>
                                <p className="text-muted-foreground mt-2">This section is under development.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
