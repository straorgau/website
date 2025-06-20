{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    nix-nvm.url = "github:jim3692/nix-nvm";
  };

  outputs = {nixpkgs, ...} @ inputs: let
    forSystems = fn:
      nixpkgs.lib.genAttrs [
        "aarch64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
        "x86_64-linux"
      ] (system: fn nixpkgs.legacyPackages.${system});
    defaultForSystems = fn: forSystems (pkgs: {default = fn pkgs;});
  in {
    devShells = defaultForSystems (
      pkgs:
        with pkgs;
          mkShell {
            nativeBuildInputs = [flyctl];
            inputsFrom = [inputs.nix-nvm.devShells.${system}.default];
          }
    );
  };
}
