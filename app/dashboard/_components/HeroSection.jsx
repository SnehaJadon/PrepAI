"use client";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Monitor,
  Users,
  Brain,
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

function HeroSection() {
  const route = useRouter()

  return (
    <div className="relative pt-4 flex flex-col justify-center">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-float" />
        <div
          className="absolute top-0 -right-4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-float"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-8 sm:pt-16 lg:pt-20 pb-8 sm:pb-16 lg:pb-28">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="block">Master Your Interviews</span>
              <span className="block gradient-text mt-2">
                with AI-Powered Practice
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Prepare for your dream job with PrepAI. Get personalized mock
              interviews, real-time feedback, and expert guidance powered by
              advanced AI technology.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={()=>route.push("/dashboard")}
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-all duration-300 text-lg group"
              >
                Start Practicing Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button size="lg" variant="outline" className="group glass-card">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button> */}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 max-w-2xl mx-auto lg:mx-0">
              <div className="glass-card animate-card-border p-4 rounded-2xl">
                <div className="card-content">
                  <p className="text-3xl font-bold gradient-text">98%</p>
                  <p className="text-sm text-muted-foreground">Accurate AI Feedback</p>
                </div>
              </div>
              <div className="glass-card animate-card-border p-4 rounded-2xl">
                <div className="card-content">
                  <p className="text-3xl font-bold gradient-text">95%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
              <div className="hidden sm:block glass-card animate-card-border p-4 rounded-2xl">
                <div className="card-content">
                  <p className="text-3xl font-bold gradient-text">24/7</p>
                  <p className="text-sm text-muted-foreground">AI Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          {/* <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group glass-card animate-card-border p-8 rounded-2xl">
              <div className="card-content">
                <div className="bg-primary/10 rounded-xl p-3 w-fit">
                  <Monitor className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mt-4 gradient-text">
                  Real-time Feedback
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Get instant feedback on your responses and improve your
                  interview skills.
                </p>
              </div>
            </div>
            <div className="group glass-card animate-card-border p-8 rounded-2xl">
              <div className="card-content bg-slate-500">
                <div className="bg-secondary/10 rounded-xl p-3 w-fit">
                  <Users className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mt-4 gradient-text">
                  Industry Specific
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Practice with questions tailored to your industry and
                  experience level.
                </p>
              </div>
            </div>
            <div className="group glass-card animate-card-border p-8 rounded-2xl">
              <div className="card-content">
                <div className="bg-primary/10 rounded-xl p-3 w-fit">
                  <Sparkles className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mt-4 gradient-text">
                  AI-Powered Analysis
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Advanced AI technology analyzes your responses and provides
                  detailed insights.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
