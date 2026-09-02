#!/bin/bash

FILES="app/page.tsx app/EducationSection.tsx app/Header.tsx"

for file in $FILES; do
  # Increase text contrast
  sed -i 's/text-gray-600/text-zinc-700/g' $file
  sed -i 's/text-gray-700/text-zinc-800/g' $file
  sed -i 's/text-gray-400/text-zinc-400/g' $file
  sed -i 's/text-gray-500/text-zinc-500/g' $file
  sed -i 's/text-gray-300/text-zinc-300/g' $file
  
  # Replace backgrounds
  sed -i 's/bg-gray-100\/50/bg-zinc-200\/80/g' $file
  sed -i 's/bg-gray-900\/50/bg-zinc-900\/50/g' $file
  sed -i 's/bg-gray-900\/30/bg-zinc-100 dark:bg-zinc-900\/30/g' $file
  sed -i 's/bg-gray-300/bg-zinc-300/g' $file
  sed -i 's/bg-gray-600/bg-zinc-600/g' $file
  
  # Replace hovers
  sed -i 's/hover:bg-gray-200/hover:bg-zinc-300/g' $file
  sed -i 's/hover:bg-gray-800/hover:bg-zinc-800/g' $file
  sed -i 's/hover:bg-gray-100/hover:bg-zinc-200/g' $file
  
  # Fix the missed dark bg in Education/Projects
  sed -i 's/bg-gray-900\/30/bg-zinc-100 dark:bg-zinc-900\/30/g' $file
  
  # Make all dark modes explicit for any remaining gray if they exist
  sed -i 's/gray/zinc/g' $file
done
