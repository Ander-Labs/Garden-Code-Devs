# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{pkgs}: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.yarn
    pkgs.nodePackages.pnpm
    pkgs.bun
  ];
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
      "aaron-bond.better-comments"
      "bradlc.vscode-tailwindcss"
      "dbaeumer.vscode-eslint"
      "esbenp.prettier-vscode"
      "formulahendry.auto-close-tag"
      "formulahendry.auto-complete-tag"
      "formulahendry.auto-rename-tag"
      "formulahendry.code-runner"
      "mhutchie.git-graph"
      "ms-vscode.js-debug"
      "ms-vscode.vscode-typescript-next"
      "oderwat.indent-rainbow"
      "PKief.material-icon-theme"
      "shardulm94.trailing-spaces"
      "teabyii.ayu"
      "usernamehw.errorlens"
      "yzhang.markdown-all-in-one"
      "chamboug.js-auto-backticks"

    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        npm-install = "npm ci --no-audit --prefer-offline --no-progress --timing";
      };
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0"];
          manager = "web";
        };
      };
    };
  };
}