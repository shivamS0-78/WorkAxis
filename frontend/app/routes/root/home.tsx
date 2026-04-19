import React from 'react'
import { Button } from '@/components/ui/button';
import type { Route } from '../../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskHub" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Homepage = () => {
  return (
    <div><Button>Click me </Button></div>
  )
}

export default Homepage