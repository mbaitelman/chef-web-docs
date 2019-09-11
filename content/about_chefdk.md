+++
title = "About ChefDK"
draft = false

aliases = "/about_chefdk.html"

[menu]
  [menu.docs]
    title = "About ChefDK"
    identifier = "chef_infra/chefdk/about_chefdk.md About ChefDK"
    parent = "chef_infra/chefdk"
    weight = 10
+++    

[\[edit on
GitHub\]](https://github.com/chef/chef-web-docs/blob/master/chef_master/source/about_chefdk.rst)

{{< info >}}

[Chef Workstation](https://downloads.chef.io/chef-workstation/) gives
you everything you need to get started with Chef Infra — ad hoc remote
execution, remote scanning, configuration tasks, cookbook creation tools
as well as robust dependency and testing software — all in one
easy-to-install package. Chef Workstation replaces ChefDK, combining all
the existing features with new features, such as ad-hoc task support and
the new Chef Workstation desktop application. Chef will continue to
maintain ChefDK, but new development will take place in Chef Workstation
without backporting features.

{{< /info >}}

{{% chef_dk %}}

Getting Started
===============

Chef Infra is a systems and cloud infrastructure automation framework
that makes it easy to deploy servers and applications to any physical,
virtual, or cloud location, no matter the size of the infrastructure.
Each organization is comprised of one (or more) ChefDK installations, a
single server, and every node that will be configured and maintained by
Chef Infra Client. Cookbooks (and recipes) are used to tell Chef Infra
Client how each node in your organization should be configured. Chef
Infra Client---which is installed on every node---does the actual
configuration.

-   [An Overview of Chef](/chef_overview/)
-   [Install ChefDK](/install_dk/)
-   [Ruby Guide](/ruby/)

{{< info >}}

See this [blog post by Irving Popovetsky about running ChefDK on
Windows.](https://www.chef.io/blog/2014/11/04/the-chefdk-on-windows-survival-guide/)

{{< /info >}}

About Workflow
--------------

ChefDK defines a common workflow for cookbook development:

1.  Create a skeleton cookbook. This is a cookbook with the standard
    files already included. The package manager is often Berkshelf,
    which is included as part of ChefDK, plus a revision control system,
    typically Git. Berkshelf helps manage cookbooks and cookbook
    dependencies.
2.  Create a virtual machine environment using Test Kitchen. This is the
    environment that will be used to develop the cookbook, including the
    location in which automated testing and debugging of that cookbook
    will be done as it is being developed.
3.  Write the recipes for the cookbook and debug those recipes as they
    are being written. This is typically an iterative process, where
    cookbook are tested as they are developed, bugs are fixed quickly,
    and then cookbooks are tested again. A text editor---Sublime Text,
    vim, TextMate, EditPad, or any other preferred text editor---is used
    to author the files in the cookbook.
4.  Perform acceptance tests. These tests are not done in a development
    environment, but rather are done against a full Chef Infra Server
    using an environment that matches the production environment as
    closely as possible.
5.  When the cookbooks pass all the acceptance tests and have been
    verified to work in the desired manner, deploy the cookbooks to the
    production environment.

Tools
=====

ChefDK installs a collection of tools and libraries into a single
directory structure, which makes it easier to manage any dependencies
these tools may have on each other and the dependencies that Chef has on
Ruby.

The most important tools included in ChefDK are:

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 87%" />
</colgroup>
<thead>
<tr class="header">
<th>Tool</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Berkshelf</td>
<td>A dependency manager for cookbooks.</td>
</tr>
<tr class="even">
<td>chef</td>
<td>A workflow tool for Chef.</td>
</tr>
<tr class="odd">
<td>Chef Infra Client</td>
<td>The agent that runs Chef.</td>
</tr>
<tr class="even">
<td>chef-vault</td>
<td>Use to encrypt data bag items using the public keys of a list of nodes. This allows only those nodes to decrypt the encrypted values.</td>
</tr>
<tr class="odd">
<td>ChefSpec</td>
<td>A unit testing framework that tests resources locally.</td>
</tr>
<tr class="even">
<td>Cookstyle</td>
<td>A Rubocop-based style-checking tool for writing clean cookbooks.</td>
</tr>
<tr class="odd">
<td>Delivery CLI</td>
<td>A command-line tool for continuous delivery workflow. Is used to setup and execute phase jobs on a Chef Automate server.</td>
</tr>
<tr class="even">
<td>Fauxhai</td>
<td>A gem for mocking Ohai data in ChefSpec tests.</td>
</tr>
<tr class="odd">
<td>Foodcritic</td>
<td>A lint tool for static analysis of recipe code.</td>
</tr>
<tr class="even">
<td>Test Kitchen</td>
<td>An integration testing framework tool that tests cookbooks across platforms.</td>
</tr>
<tr class="odd">
<td>kitchen-dokken</td>
<td>A test-kitchen plugin that provides a driver, transport, and provisioner for rapid cookbook testing and container development using Docker and Chef.</td>
</tr>
<tr class="even">
<td>kitchen-vagrant</td>
<td>A Kitchen driver for Vagrant.</td>
</tr>
<tr class="odd">
<td>Ruby</td>
<td>The reference language for Chef.</td>
</tr>
</tbody>
</table>

ChefDK Tools
------------

The following tools are available only in ChefDK:

[chef (executable)](/ctl_chef.html) | [Policyfiles](/policyfile/)

Community Tools
---------------

The following tools have been developed by members of the Chef
community. These tools are considered to be a useful part of the Chef
workflow and have been packaged as part of ChefDK. (They are all
available independently of ChefDK, as well.) The use of these tools as
part of your workflow is recommended, but at the same time is completely
optional. Use them in the way that makes sense for your organization:

[Berkshelf](/berkshelf/) | [Chef Vault](/chef_vault/) |
[ChefSpec](/chefspec/) | [FoodCritic](/foodcritic/) | [Test
Kitchen](/kitchen/) |
[kitchen-vagrant](/plugin_kitchen_vagrant/) |
[Cookstyle](/cookstyle/)