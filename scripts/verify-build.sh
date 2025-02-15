#!/bin/bash

echo "Verifying build outputs..."

# 检查主输出目录
echo "Checking main dist directory..."
ls -la dist

# 检查 v0.6 输出
echo "Checking v0.6 output..."
ls -la dist/v0.6

# 检查关键文件
echo "Checking for key files..."
test -f dist/index.html && echo "✓ Main index.html exists" || echo "✗ Main index.html missing"
test -f dist/v0.6/index.html && echo "✓ v0.6 index.html exists" || echo "✗ v0.6 index.html missing"