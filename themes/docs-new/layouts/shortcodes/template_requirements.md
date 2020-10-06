To use a template, two things must happen:

1.  A template resource must be added to a recipe
2.  An Embedded Ruby (ERB) template must be added to a cookbook

For example, the following template file and template resource settings
can be used to manage a configuration file named `/etc/sudoers`. Within
a cookbook that uses sudo, the following resource could be added to
`/recipes/default.rb`:

```ruby
template '/etc/sudoers' do
  source 'sudoers.erb'
  mode '0440'
  owner 'root'
  group 'root'
  variables(sudoers_groups: node['authorization']['sudo']['groups'],
            sudoers_users: node['authorization']['sudo']['users'])
end
```

And then create a template called `sudoers.erb` and save it to
`templates/default/sudoers.erb`:

```ruby
#
# /etc/sudoers
#
# Generated by Chef for <%= node['fqdn'] %>
#

Defaults        !lecture,tty_tickets,!fqdn

# User privilege specification
root          ALL=(ALL) ALL

<% @sudoers_users.each do |user| -%>
<%= user %>   ALL=(ALL) <%= "NOPASSWD:" if @passwordless %>ALL
<% end -%>

# Members of the sysadmin group may gain root privileges
%sysadmin     ALL=(ALL) <%= "NOPASSWD:" if @passwordless %>ALL

<% @sudoers_groups.each do |group| -%>
# Members of the group '<%= group %>' may gain root privileges
<%= group %> ALL=(ALL) <%= "NOPASSWD:" if @passwordless %>ALL
<% end -%>
```

And then set the default attributes in `attributes/default.rb`:

```ruby
default['authorization']['sudo']['groups'] = %w(sysadmin wheel admin)
default['authorization']['sudo']['users'] = %w(jerry greg)
```