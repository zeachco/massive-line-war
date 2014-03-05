#!/bin/bash
echo ":: Will install nodeJS ::"
cd
git clone git://github.com/ry/node.git
cd node
./configure
make
sudo make install

echo ":: Will install NPM ::"
sudo apt-get install npm

echo ":: Will install Karma ::"
sudo npm install -g karma

echo ":: Will install Karma browsers plugins ::"
sudo npm install karma-safari-launcher --save-dev
sudo npm install karma-ie-launcher --save-dev
sudo npm install karma-opera-launcher --save-dev
#sudo npm install chai
#sudo npm install karma-coverage
#sudo npm install karma-coverage-0.11


echo ""
echo ""
echo "::::::::: Installation finished :D ::::::::::"
echo ":: To execute Karma, run the command below ::"
echo ""
echo "sh ~/path/to/project/karmaDeamon.sh"