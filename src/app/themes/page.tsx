import React from 'react'
import { PlusCircle, MoreVertical } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Theme {
  name: string
  description: string
  colors: Record<string, string>
}

const themes: Theme[] = [
  {
    name: "Default",
    description: "A clean and minimal theme with neutral colors for everyday use.",
    colors: {
      background: "0 0% 100%",
      foreground: "240 10% 3.9%",
      card: "0 0% 100%",
      cardForeground: "240 10% 3.9%",
      popover: "0 0% 100%",
      popoverForeground: "240 10% 3.9%",
      primary: "240 5.9% 10%",
      primaryForeground: "0 0% 98%",
      secondary: "240 4.8% 95.9%",
      secondaryForeground: "240 5.9% 10%",
      muted: "240 4.8% 95.9%",
      mutedForeground: "240 3.8% 46.1%",
      accent: "240 4.8% 95.9%",
      accentForeground: "240 5.9% 10%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 0% 98%",
      border: "240 5.9% 90%",
      input: "240 5.9% 90%",
      ring: "240 10% 3.9%",
      radius: "0.5rem"
    }    
  },
  {
    name: "Ruby",
    description: "A vibrant red theme inspired by the deep tones of rubies.",
    colors: {
      background: "0 0% 100%",
      foreground: "240 10% 3.9%",
      card: "0 0% 100%",
      cardForeground: "240 10% 3.9%",
      popover: "0 0% 100%",
      popoverForeground: "240 10% 3.9%",
      primary: "346.8 77.2% 49.8%",
      primaryForeground: "355.7 100% 99%",
      secondary: "240 4.8% 95.9%",
      secondaryForeground: "240 5.9% 10%",
      muted: "240 4.8% 95.9%",
      mutedForeground: "240 3.8% 45%",
      accent: "240 4.8% 95.9%",
      accentForeground: "240 5.9% 10%",
      destructive: "0 72% 51%",
      destructiveForeground: "0 0% 98%",
      border: "240 5.9% 90%",
      input: "240 5.9% 90%",
      ring: "346.8 77.2% 49.8%",
      radius: "0.5rem"
    }    
  },
  {
    name: "Sapphire",
    description: "A cool blue theme reminiscent of sapphire gemstones.",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "221.2 83.2% 53.3%",
      primaryForeground: "210 40% 98%",
      secondary: "210 40% 96.1%",
      secondaryForeground: "222.2 47.4% 11.2%",
      muted: "210 40% 96.1%",
      mutedForeground: "215.4 16.3% 44%",
      accent: "210 40% 96.1%",
      accentForeground: "222.2 47.4% 11.2%",
      destructive: "0 72% 51%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "221.2 83.2% 53.3%",
      radius: "0.5rem"
    }    
  },
  {
    name: "Emerald",
    description: "A refreshing green theme inspired by emeralds.",
    colors: {
      background: "0 0% 100%",
      foreground: "240 10% 3.9%",
      card: "0 0% 100%",
      cardForeground: "240 10% 3.9%",
      popover: "0 0% 100%",
      popoverForeground: "240 10% 3.9%",
      primary: "142 86% 28%",
      primaryForeground: "356 29% 98%",
      secondary: "240 4.8% 95.9%",
      secondaryForeground: "240 5.9% 10%",
      muted: "240 4.8% 95.9%",
      mutedForeground: "240 3.8% 45%",
      accent: "240 4.8% 95.9%",
      accentForeground: "240 5.9% 10%",
      destructive: "0 72% 51%",
      destructiveForeground: "0 0% 98%",
      border: "240 5.9% 90%",
      input: "240 5.9% 90%",
      ring: "142 86% 28%",
      radius: "0.5rem"
    }    
  },
  {
    name: "Windows 98",
    description: "A retro theme inspired by the iconic Windows 98 interface.",
    colors: {
      background: "0 0% 85%",
      foreground: "0 0% 10%",
      primary: "0 0% 80%",
      primaryForeground: "0 0% 10%",
      secondary: "0 0% 70%",
      secondaryForeground: "0 0% 10%",
      accent: "240 100% 50%",
      accentForeground: "0 0% 100%",
      destructive: "0 84% 32%",
      destructiveForeground: "0 0% 98%",
      muted: "0 0% 75%",
      mutedForeground: "0 0% 10%",
      card: "0 0% 95%",
      cardForeground: "0 0% 10%",
      popover: "0 0% 100%",
      popoverForeground: "240 10% 3.9%",
      border: "0 0% 60%",
      input: "0 0% 60%",
      ring: "0 0% 10%",
      radius: "0rem"
    }    
  },
  {
    name: "Daylight",
    description: "A bright theme with warm, sunny hues to evoke daylight.",
    colors: {
      background: "36 39% 88%",
      foreground: "36 45% 15%",
      primary: "36 45% 70%",
      primaryForeground: "36 45% 11%",
      secondary: "40 35% 77%",
      secondaryForeground: "36 45% 25%",
      accent: "36 64% 57%",
      accentForeground: "36 72% 17%",
      destructive: "0 84% 37%",
      destructiveForeground: "0 0% 98%",
      muted: "36 33% 75%",
      mutedForeground: "36 45% 25%",
      card: "36 46% 82%",
      cardForeground: "36 45% 20%",
      popover: "0 0% 100%",
      popoverForeground: "240 10% 3.9%",
      border: "36 45% 60%",
      input: "36 45% 60%",
      ring: "36 45% 30%",
      radius: "0rem"
    }    
  },
  {
    name: "Midnight",
    description: "A dark theme with deep blues and blacks for late-night work.",
    colors: {
      background: "240 5% 6%",
      foreground: "60 5% 90%",
      primary: "240 0% 90%",
      primaryForeground: "60 0% 0%",
      secondary: "240 4% 15%",
      secondaryForeground: "60 5% 85%",
      accent: "240 0% 13%",
      accentForeground: "60 0% 100%",
      destructive: "0 60% 50%",
      destructiveForeground: "0 0% 98%",
      muted: "240 5% 25%",
      mutedForeground: "60 5% 85%",
      card: "240 4% 10%",
      cardForeground: "60 5% 90%",
      popover: "240 5% 15%",
      popoverForeground: "60 5% 85%",
      border: "240 6% 20%",
      input: "240 6% 25%",
      ring: "240 6% 30%",
      radius: "0.5rem"
    }
  },
  {
    name: "Pastel",
    description:"A gentle, soothing aesthetic design.",
    colors: {
      background: "210 100% 97%",
      foreground: "339 20% 20%",
      primary: "308 56% 85%",
      primaryForeground: "210 22% 22%",
      secondary: "196 75% 88%",
      secondaryForeground: "210 22% 22%",
      accent: "211 86% 70%",
      accentForeground: "210 22% 22%",
      destructive: "0 93% 73%",
      destructiveForeground: "210 22% 22%",
      muted: "210 100% 95%",
      mutedForeground: "210 22% 22%",
      card: "210 100% 97%",
      cardForeground: "210 22% 22%",
      popover: "0 0% 100%",
      popoverForeground: "341 20% 22%",
      border: "210 40% 80%",
      input: "210 40% 56%",
      ring: "210 40% 60%",
      radius: "1rem"
    }    
  },
  {
    name: "Deep Sea",
    description:"Convey a sense of depth, sophistication, and tranquility.",
    colors: {
      background: "210 100% 6%",
      foreground: "180 100% 90%",
      primary: "200 100% 28%",
      primaryForeground: "180 100% 90%",
      secondary: "203 23% 30%",
      secondaryForeground: "180 100% 90%",
      accent: "198 70% 50%",
      accentForeground: "185 10% 13%",
      destructive: "0 98% 44%",
      destructiveForeground: "0 0% 100%",
      muted: "200 50% 30%",
      mutedForeground: "180 100% 90%",
      card: "210 100% 12%",
      cardForeground: "180 100% 90%",
      popover: "210 100% 15%",
      popoverForeground: "180 100% 90%",
      border: "210 50% 40%",
      input: "210 50% 40%",
      ring: "180 100% 90%",
      radius: "0rem"
    }
  }
];

export default function ThemeSelector() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Themes</h1>
        <Button variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Theme
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <Card key={theme.name} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {theme.name}
              </CardTitle>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                {theme.description}
              </p>
              <div className="flex mt-4 h-4">
              <div
                    className="flex-1"
                    style={{ backgroundColor: `hsl(${theme.colors.background})`}}
                  />
                  <div
                    className="flex-1"
                    style={{ backgroundColor: `hsl(${theme.colors.foreground})`}}
                  />
                  <div
                    className="flex-1"
                    style={{ backgroundColor: `hsl(${theme.colors.primary})`}}
                  />
                  <div
                    className="flex-1"
                    style={{ backgroundColor: `hsl(${theme.colors.secondary})`}}
                  />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Custom Themes</h2>
        <Card className="p-6 text-center">
          {/* <h3 className="text-lg font-semibold mb-2">
            Custom themes are unavailable on your plan
          </h3> */}
          <p className="text-sm text-muted-foreground mb-4">
            Coming soon! 
          </p>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Theme
          </Button>
        </Card>
      </div>
    </div>
  )
}