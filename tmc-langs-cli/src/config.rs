//! Handles the CLI's configuration files and credentials.

mod credentials;
mod projects_config;
mod tmc_config;

pub use credentials::Credentials;
pub use projects_config::ProjectsConfig;
pub use tmc_config::{ConfigValue, TmcConfig};

use anyhow::{Context, Error};
use std::env;
use std::path::PathBuf;

// base directory for a given plugin's settings files
fn get_tmc_dir(client_name: &str) -> Result<PathBuf, Error> {
    let config_dir = match env::var("TMC_LANGS_CONFIG_DIR") {
        Ok(v) => PathBuf::from(v),
        Err(_) => dirs::config_dir().context("Failed to find config directory")?,
    };
    Ok(config_dir.join(format!("tmc-{}", client_name)))
}
