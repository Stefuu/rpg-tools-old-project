Sistema web e app para ajudar mesas de RPG físicas ou online.

Usamos [este](https://github.com/kamrik/CordovaGulpTemplate "Title") template inicial pro gulp + Cordova.

## Instalação do npm, gulp e cordova no Ubuntu e derivados ##
    sudo apt-get install npm nodejs-legacy
    sudo npm install gulp -g
    sudo npm install cordova -g
    sudo npm install -g npm

## Instalação do SDK do android no Ubuntu e derivados ##
    --Ubuntu Trusty ou posterior
    sudo add-apt-repository ppa:webupd8team/java
    sudo apt update
    sudo apt install oracle-java8-installer oracle-java8-unlimited-jce-policy ant
    --Ubuntu Saucy ou anterior
    cd ~/Downloads
    wget http://goo.gl/izCw2g
    wget http://goo.gl/j6mBQh
    sudo dpkg -i oracle-java8-set-default_8u31+8u33arm-1~webupd8~1_all.deb
    sudo dpkg -i oracle-java8-unlimited-jce-policy_8u31+8u33arm-1~webupd8~1_all.deb

    cd ~/Downloads
    wget http://dl.google.com/android/android-sdk_r24.0.2-linux.tgz
    mkdir ~/bin
    tar -xvzf android-sdk_r24.0.2-linux.tgz -C ~/bin
    rm -rf android-sdk_r24.0.2-linux.tgz
    echo -e 'if [ -d "$HOME/bin/android-sdk-linux/tools" ] ; then\n    PATH="$HOME/bin/android-sdk-linux/tools:$PATH"\nfi' >> ~/.profile
    echo -e 'if [ -d "$HOME/bin/android-sdk-linux/platform-tools" ] ; then\n    PATH="$HOME/bin/android-sdk-linux/platform-tools:$PATH"\nfi' >> ~/.profile
    --É necessário fazer logout e login para recarregar as variáveis do ambiente
    echo y | android update sdk -u --all --filter 10
    echo y | android update sdk --no-ui --filter 5
    echo y | android update sdk --no-ui --filter 1
    --Em 64 bits rodar também
    sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 libz1:i38

## Projeto ##
    git clone <url  do projeto>
    cd rpgtools
    npm install
    gulp recreate
    gulp build/run/emulate

Se tiver alguma dúvida do que cada task do gulp (build, run, emulate) faz, basta olhar o gulpfile.js.