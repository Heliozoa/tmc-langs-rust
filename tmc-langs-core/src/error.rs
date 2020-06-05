use crate::response;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum CoreError {
    #[error(transparent)]
    Io(#[from] std::io::Error),
    #[error(transparent)]
    Request(#[from] reqwest::Error),
    #[error(transparent)]
    Parse(#[from] url::ParseError),
    #[error(transparent)]
    Response(#[from] response::ResponseError),
    #[error("token error todo {0}")]
    Token(oauth2::RequestTokenError<oauth2::basic::BasicErrorResponseType>),
    #[error("already authenticated")]
    AlreadyAuthenticated,
    #[error("auth required")]
    AuthRequired,
    #[error("Failed to find home directory")]
    HomeDir,
    #[error("Malformed response from tmc-server")]
    MalformedResponse,
    #[error(transparent)]
    TmcLangs(#[from] tmc_langs_util::Error),
}
