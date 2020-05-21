## Git Configuration

Git is a version management system (VCS), which is a very useful tool for enterprises that need the functions of code tracing, branch management and code rollback. There are many Git code hosting services on the market, such as GitHub, GitLab, Gitee and so on. Of course, you can build git services by yourself.

As shown in [CI / CD Chapter](./README.md)(as shown below), Crawlab supports git warehouse synchronization to each online node, all you need to do is start the Git settings of the spider and configure the Git settings.

![](http://static-docs.crawlab.cn/crawlab-ci-cd.png)

#### Start Git

It's easy to start Git settings, you only need to turn on the "Is it Git or not" switch as shown in the figure below at the place where **create a spider** or **spider details**.

![](http://static-docs.crawlab.cn/is-git.png)

#### Config Git

After you start Git, you can see the "Git settings" tab in the spider details, the interface you click is shown below.

![](http://static-docs.crawlab.cn/git-settings.png)

Crawlab's Git synchronization supports both HTTP and SSH.

If you select **HTTP**, you can do this:

1. Fill in the warehouse address in the "Git URL" input box;
2. Then click "need to verify" and fill in the verification information;
3. Select the 'Git branch';
4. Click the "Save" button.

If you select **SSH**, you can do this:

1. Click "Copy" to add "SSH public key" to Git service (you can search online to find out how to add SSH public key to Git service);
2. Fill in the warehouse address in the "Git URL" input box;
3. Select the 'Git branch';
4. Click the "Save" button.

#### Automatic Synchronization

If you need automatic synchronization function, you can turn on the "automatic synchronization" switch and select the synchronization frequency. In this way, once the spider code on Git is updated, Crawlab will synchronize it according to the synchronization frequency automatically.

#### Manual Synchronization

Click the red "synchronization" button and confirm to synchronize the spider code of Git warehouse manually.

#### Reset

Sometimes you need to reset the code to clear all the codes of the warehouse, just click the "reset" button and confirm.

#### View Version

In the log tag, you can see all commits and their corresponding branches and versions(tags), as well as the code submitted by who, as shown in the following figure.

![](http://static-docs.crawlab.cn/git-log.png)

#### Switch Versions

Also in the log tab, you can see a red checkout button at the bottom right of each commit. Click it to switch the spider code to corresponding version.